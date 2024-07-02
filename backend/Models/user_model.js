import mongoose, { mongo } from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {timestamps});

export const User = mongoose("User", userSchema);
