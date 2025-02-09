import userModel from "../models/userModel.js";
import bcrypt, { compare } from "bcrypt";

export const registerUser = async(req, res) => {
    const { username, password, firstName, lastName } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        username, password: hashPass, firstName, lastName
    })

    try{
        await newUser.save();
        res.status(200).json(newUser);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const loginUser = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await userModel.findOne({username})
        if(user){
            const valid = await bcrypt.compare(password, user.password);

            valid? res.status(200).json(user): res.status(400).json("Wrong Password");
        }else{
            res.status(404).json("User doesn't exit");
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}