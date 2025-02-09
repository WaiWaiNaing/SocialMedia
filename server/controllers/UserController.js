import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        if(user){
            const {password, ...otherData} = user._doc
            res.status(200).json(otherData);
        }else{
            res.status(404).json("User not found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateUser = async(req, res) => {
    const id = req.params.id;
    const { currentUserId, password } = req.body

    if(id === currentUserId){
       try {
        if(password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(password, salt);
        }

        const user = await userModel.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(user);
       } catch (error) {
        res.status(500).json(error);
       }
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body
    if(currentUserId === id){
        try {
            await userModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully");
        } catch (error) {
            res.status(500).json(error);  
        }
    }
}

export const followerUser = async (req, res) => {
    const id = req.params.id;
    const { followerUserId } = req.body;
    if(followerUserId === id){
        res.status(403).json("Forbidden");
    }else{
        try {
            const followerUser = await userModel.findById(id);
            const followingUser = await userModel.findById(followerUserId);

            if(! followerUser.followers.includes(followerUserId) ){
                await followerUser.updateOne({$push : {followers: followerUserId}});
                await followingUser.updateOne({$push : {following: id}});

                res.status(200).json("User has been followed");
            }else{
                res.status(403).json("You already follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export const unfollowUser = async (req, res) => {
    const id = req.params.id;
    const { unfollowUserId } = req.body;
    if(unfollowUserId === id){
        res.status(403).json("Forbidden");
    }else{
        try {
            const followerUser = await userModel.findById(id);
            const followingUser = await userModel.findById(unfollowUserId);

            if(! followerUser.followers.includes(unfollowUserId) ){
                await followerUser.updateOne({$pull : {followers: unfollowUserId}});
                await followingUser.updateOne({$pull : {following: id}});

                res.status(200).json("User has been Unfollowed");
            }else{
                res.status(403).json("User is not followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}