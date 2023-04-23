import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    location:String,
    verified:Boolean
})

const User = mongoose.model("User",userSchema);

export default User;