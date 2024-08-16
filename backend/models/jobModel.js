import mongoose from 'mongoose';

const jobListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    category: { type: String, required: true },
    Experience: { type: String, required: true },
    salary: { type: Number, required: true },
    skill: { type: String, required: true },
    Worktime: { type: String, required: true },
    email: { type: String,required:true },
    cartData:{type:Object,default:{}},
                
  },{minimize: false});
  const jobModel = mongoose.models.job || mongoose.model('job',jobListingSchema);
 export default jobModel;