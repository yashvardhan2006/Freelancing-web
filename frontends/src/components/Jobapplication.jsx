import React from 'react';
import "./Jobapplication.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Jobapplication = () => {
    const navigate = useNavigate()
//     const {state} = useLocation();
// const { email,name,remail } = state; 
const { state } = useLocation();
const { email = "", name = "", remail = "" } = state || {};
    const [form, setform] = useState({fullName:name,email:email,phoneNumber:"",education:"",skills:"",Experience:"",remail:remail})
    const handleform= (e) => {
      setform({...form,[e.target.name]:e.target.value})
      console.log({...form,[e.target.name]:e.target.value})
      console.log(email,name,remail)
    }
    const handleapply = async() => {
        let res = await fetch("http://localhost:5003/api/job/Apply", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        let response = await res.json()
        console.log(response)
        navigate("/Home")
    }
    
    
    return (
        <div className='flex justify-center'>

        <div className="container">
            <h1 className="form-title">APPLY FOR JOB</h1>
            
                <div className="main-user-info">
                    <div className="user-input-box">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                        onChange={handleform}
                        value={form.fullName}
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"
                            />
                    </div>
                    {/* <div className="user-input-box">
                        <label htmlFor="Address">Address</label>
                        <input
                            type="text"
                            id="Address"
                            name="Address"
                            placeholder="Enter your Address"
                            />
                    </div> */}
                    <div className="user-input-box">
                        <label htmlFor="email">Email</label>
                        <input
                        onChange={handleform}
                        value={form.email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                        onChange={handleform}
                        value={form.phoneNumber}
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="education">Education</label>
                        <input
                        onChange={handleform}
                        value={form.education}
                            type="text"
                            id="education"
                            name="education"
                            placeholder="Enter Educational details.."
                            />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="skills">Skills</label>
                        <input
                        onChange={handleform}
                        value={form.skills}
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder="Skills..."
                            />
                    </div>
                    {/* <div className="user-input-box">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="About yourself..."
                            />
                    </div> */}
                    <div className="user-input-box">
                        <label htmlFor="Experience">Experience</label>
                        <input
                        onChange={handleform}
                        value={form.Experience}
                            type="text"
                            id="Experience"
                            name="Experience"
                            placeholder="Previous experience..."
                            />
                    </div>
                </div>
                <div className="form-submit-btn">
                   <button onClick={handleapply}>Apply Now</button>
                </div>
            
        </div>
                            </div>
    );
};

export default Jobapplication;
