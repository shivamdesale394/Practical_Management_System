import mongoose from 'mongoose';  
import Practical from '../models/Practical.js';
  
const subjectSchema=new mongoose.Schema({  
    name:{  
        type:String,  
        required:true,  
        unique:true  
    },    
    code:{  
        type:String,  
        required:true,  
    },  
    createdBy:[{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:'User',  
         
    }],
    practicals: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Practical', 
        },
      ], 
      
})  
  
const subjectModel=mongoose.model("Subject",subjectSchema);  
  
export default subjectModel; 