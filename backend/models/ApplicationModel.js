import mongoose from 'mongoose';

const ApplySchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    education: { type: String, required: true },
    skills: { type: String, required: true },
    Experience: { type: String, required: true },
    remail: { type: String, required: true },
    cartData:{type:Object,default:{}},
                
  },{timestamps: true});
  const ApplicationModel = mongoose.models.Apply || mongoose.model('Apply',ApplySchema);
 export default ApplicationModel;