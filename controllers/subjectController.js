import subjectModel from "../models/Subject.js";
import User from "../models/user.js"

export const createSubject=async (req, res) => {
    try {
      const { name,code,createdBy,uname } = req.body;
      const userinfo= await User.findOne({name:uname});
      const subjectObj = new subjectModel({
        name,
        code,
        createdBy:userinfo.id,
      });
  
      const savedSubjectObj = await subjectObj.save();
  
      res.json({
        savedSubjectObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };
export const getSubjects=async(req,res)=>{
    try {
      const getsubjects=await subjectModel.find()
      res.json({
        getsubjects
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }