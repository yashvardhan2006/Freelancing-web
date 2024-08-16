
import ApplicationModel from "../models/ApplicationModel.js";
import jwt from 'jsonwebtoken';


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET )
  }
const ApplyNow = async (req,res) => {
    const{fullName,email,phoneNumber,education,skills,Experience,remail}= req.body;
        
      
        try {
          const newApply = new ApplicationModel({
            fullName:fullName,
            email:email,
            phoneNumber:phoneNumber,
            education:education,
            skills:skills,
            Experience:Experience,
            remail:remail

    
          });
          const Apply = await newApply.save();
            const token = createToken(Apply._id)
            res.json({success:true, token})
        } catch (err) {
          console.error("Error saving in Apply Form", err);
        }
      };

      const Appliedjob = async (req,res) =>{
        try{
          const applyjob = await ApplicationModel.find({});
          res.json({success:true,data:applyjob})
        }
        catch (error){
          console.log(error)
          res.json({success:false,message:"Error"})
        }
  }
    
      
      
      
     export  {ApplyNow,Appliedjob};