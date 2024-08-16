import React from 'react'
import Navbar1 from '../Navbar1'
import Navbar2 from '../Navbar2'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Webdev = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  const [listjob, setlistjob] = useState([])
  useEffect(() => {
      const getjob = async () => {
          let jb = await fetch("http://localhost:5003/api/job/list")
         let jobs = await jb.json()
        
          setlistjob(jobs.data)
      
      }
      getjob()

  }, [])
  const handleapply = (remail) => {
console.log(remail)
      navigate('/Application', { state: {email:user.email,name:user.name,remail:remail} });
  }
  


  return (
      <div>
          
              <Navbar1 />
              <Navbar2 />
              {listjob.map((items,index) => {
                if(items.category=="Web Development"){

                
                return <div key={index} className="course">
                <div className="preview">
                    <h6>{items.company}</h6>
                    <h2>{items.category}</h2>
                    
                    <div className="info">
                        <div className="progress-wrapper">
                            <div className="progress">

                            </div>
                            <span className="progress-text">
                                Experience -{items.Experience} Years
                            </span>
                        </div>
                        <h5>{items.Worktime}</h5>

                    </div>
                </div>
                <div className="details flex justify-between w-full">
                    <div className="p-trunc">
                        <h2 className='text-xl font-semibold'>{items.title}</h2>
                        <ul><li>SKILLS REQUIRED: {items.skill}</li>
                            <li>JOB TYPE : WORK FROM HOME</li>
                            <li>SALARY : ₹ {items.salary}/month</li>
                            <li>PERKS : CERTIFICATE , LETTER OF RECCOMENDATION.</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => {handleapply(items.email)}
                        } className="btn">
                            Apply Now ..
                        </button>
                    </div>
                </div>
            </div>}
              }
              )}
             
           

                     


                  </div>
              
  )
}

export default Webdev
