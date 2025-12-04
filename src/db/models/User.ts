import {Schema, model, Document} from "mongoose";

import { emailRegexp } from "../../constants/auth.constants.js";

import { handleSaveError, setUpdateSettings } from "../hooks.js";

export interface UserDocument extends Document {
    email: string;
    password: string;
    accessToken: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<UserDocument>({
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    }
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateSettings);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model<UserDocument>("user", userSchema);

export default User;