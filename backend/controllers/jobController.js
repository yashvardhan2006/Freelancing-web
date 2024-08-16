import jobModel from "../models/jobModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

import validator from "validator"


const createToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET )
}

const createJobListing = async (req,res) => {
const{title,company,category,Experience,salary,skill,Worktime,email}= req.body;
    
  
    try {
      const newjob = new jobModel({
        title:title,
        company: company,
        category: category,
        Experience: Experience,
        salary: salary,
        skill: skill,
        Worktime: Worktime,
        email:email,
      });
      const job = await newjob.save();
        const token = createToken(job._id)
        res.json({success:true, token})
    } catch (err) {
      console.error("Error saving job listing", err);
    }
  };

  // all job list // 
  const listJob = async (req,res) =>{
        try{
          const jobs = await jobModel.find({});
          res.json({success:true,data:jobs})
        }
        catch (error){
          console.log(error)
          res.json({success:false,message:"Error"})
        }
  }
  
 export  {createJobListing,listJob};