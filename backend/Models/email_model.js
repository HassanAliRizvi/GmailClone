import mongoose, { mongo } from "mongoose";
import { type } from "os";


const emailSchema = new mongoose.Schema({
    to:{
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
}, {timestamps});

export const Email = mongoose("User", emailSchema);