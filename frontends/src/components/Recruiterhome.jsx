import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Recruiterhome = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [jobapply, setjobapply] = useState([])
    const navigate = useNavigate()
    const tojobform = () => {
        navigate("/Recruiter")
    }
    useEffect(() => {
        const getappliedjob = async () => {
            let jb = await fetch("http://localhost:5003/api/job/Applied")
            let appliedjb = await jb.json()
            setjobapply(appliedjb.data)
            console.log(appliedjb.data)
        }

        getappliedjob()
    }, [])


    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <div>

            <div className="container  flex justify-center min-w-full">
                <div className='text-center m-4'>
                    <div className='text-2xl my-3'>Click on the Button to Post a Job</div>
                    <button onClick={tojobform} className='text-normal rounded-xl bg-red-400 text-white py-2 px-3' >Post a Job</button>
                </div>
                

            </div>
            <div>
                <div className='font-semibold text-gray-800 px-4 mt-4 text-2xl'>Candidates Applied For Job</div>
                    {jobapply.map((items,index) => {
                        if(items.remail==user.email){
                            return <div key={index} className="course">
                            <div className="preview">
                                <h6>{items.company}</h6>
                                <h2>{items.category}</h2>
                                
                                <div className="info">
                                    <div className="progress-wrapper">
                                        <div className="progress">
           
                                        </div>
                                        <span className="progress-text">
                                            <div>
                                            Name - {items.fullName}
                                            </div>
                                            <div>Email - {items.email}</div>
                                            
                                        </span>
                                    </div>
                                    
           
                                </div>
                            </div>
                            <div className="details flex justify-between w-full">
                                <div className="p-trunc">
                                   
                                    <ul>
                                        <li>Phone Number : {items.phoneNumber}</li>
                                        <li>Education : {items.education}</li>
                                        <li>Skill - {items.skills}</li>
                                        <li>Skill - {items.Experience}</li>
                                    </ul>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                      }
                    }
                )
                
            }
                    
                </div>
           
            </div>
        </div>
    )
}

export default Recruiterhome
