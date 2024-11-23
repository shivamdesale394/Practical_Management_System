import mongoose from "mongoose";
const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
       console.log("MongoDB connected Successfully...")

    }
    catch(error) {
        console.log("Connection Faild",error)
    }
}
export default dbConnect; // exporting the function to use it in other files