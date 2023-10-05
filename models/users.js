import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    displayName: { type: String },
    type: {type: String, required: true, enum: ["student", "admin"]}
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
