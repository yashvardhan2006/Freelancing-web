
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate()

const [Role, setRole] = useState()
  const [form, setform] = useState({name:"",password:"",email:"",role:"" })
        const [data, setdata] = useState([])
        const handleRole =(e) => {
setRole(e.target.value)
          console.log(e.target.value)}
          const handleform=(e) => {
            setform({...form,[e.target.name]:e.target.value,role:Role})
          }
          const handlesignup = async() => {
        
            let res= await fetch("http://localhost:5003/api/user/register",{method:"POST", headers:{"Content-Type":"application/json"},
              body:JSON.stringify(form)})
              let response = await res.json()
              console.log(response)
              localStorage.setItem("token",response.token)
              localStorage.setItem("loggedin","True")
              localStorage.setItem("user", JSON.stringify(response.userinfo))
              if (response.success && response.userinfo.role =="Freelancer") {
                navigate("/Home")
             }
             if (response.success && response.userinfo.role =="Recruiter") {
                 navigate("/Recruiterhome")
              }
              setform({name:"",password:"",email:"",role:"" })
          }
          
          
        
    return(
    <div>
        <Navbar1/>  
        <Navbar2/>  
          <div className='flex justify-center items-center my-8'>
            <div className='border-2 border-black rounded-lg w-[40vw] p-8'>
              <div className='flex justify-between'>
                <div className='border-2 border-black flex items-center p-4 rounded-lg w-[14vw]'>
                  <input type="radio" value="Freelancer" onChange={(e) => {handleRole(e)}} name="freelancer" />
                  <label htmlFor="freelancer" className='mx-4'>I want to Work as a Freelancer</label>
                </div>
                <div className='border-2 border-black flex items-center p-4 rounded-lg w-[14vw]'>
                  <input type="radio" value="Recruiter" onChange={(e) => {handleRole(e)}} name="freelancer" />
                  <label htmlFor="freelancer" className='mx-4'>I want to hire a Freelancer</label>
                </div>
              </div>
              <div className='flex justify-between flex-wrap gap-6 my-7'>
                <input type="text" onChange={handleform} value={form.name} name='name' placeholder='Name' className='border-b-2 p-2 w-full' />
                
                <input type="text" onChange={handleform} value={form.email} name='email' placeholder='Email' className='border-b-2 w-full p-2' />
                <input type="text" onChange={handleform} value={form.password} name='password' placeholder='Password' className='border-b-2 w-full p-2' />
              </div>
              <button onClick={handlesignup} className='bg-orange-400 w-full p-5 rounded-lg text-white'>SIGN UP</button>
            </div>
          </div>
        </div>
      )
}

export default Signup
