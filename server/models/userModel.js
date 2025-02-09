import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profileImg: String,
        coverImg: String,
        about: String,
        address: String,
        worksAt: String,
        relationship: String,
        followers: [],
        following: []
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model("users", UserSchema);
export default userModel;