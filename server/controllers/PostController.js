import postModel from "../models/postModel.js";
import mongoose from "mongoose";
import userModel from "../models/userModel.js";

export const createPost = async(req, res) => {
    const newPost = new postModel(req.body);

    try {
        await newPost.save();
        res.status(200).json("Post Created");
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getPosts = async(req, res) => {
    const id = req.params.id;

    try {
        const post = await postModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async(req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(postId);
        if(post.userId === userId){
            await post.updateOne( { $set: req.body });
            res.status(200).json("Post Updated");
        }else{
            res.status(403).json("Forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(id);
        if(post.userId === userId){
            await post.deleteOne();
            res.status(200).json("Post delete successfully");
        }
        else{
            res.status(403).json("Forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const likePost = async(req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
        const post = await postModel.findById(id);
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("Post liked");
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("Post Unliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getTimelinePosts = async(req, res) => {
    const userId = req.params.id;
    try {
        const currentUserPosts = await postModel.find({userId: userId});
        const followingPosts = await userModel.aggregate([
            { 
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ]);
        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
            .sort((a, b) => {
                return a.createdAt - b.createdAt;
            })
        );
    } catch (error) {
        res.status(500).json(error);
    }
}