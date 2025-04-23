import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email is not available"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: {
            values: ["admin", "agent", "user"]
        }
    },
    profileImage: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export const User = mongoose.model<TUser>("User", userSchema)