import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['Admin','Teacher','Student'],
        require:true
    },
})

const userModel = mongoose.model("user",userSchema)
export default userModel;