import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    name: { type: String, required: true },
    location: String,
    socialOnly: { type: Boolean, dafault: false }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 5);
});
const User = mongoose.model('User', userSchema);

export default User;