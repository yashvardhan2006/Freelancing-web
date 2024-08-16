import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const navigate = useNavigate()
    const [form, setform] = useState({ email: "", password: "" })
    const [data, setdata] = useState([])
    const [token, settoken] = useState()
    const handleform = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }
    const handlelogin = async () => {
        // setdata([...data, form])
        // console.log([...data, form])
        let res = await fetch("http://localhost:5003/api/user/login", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        let response = await res.json()
        setform({ email: "", password: "" })
        console.log(response)
         settoken(response.token)
     localStorage.setItem("token",response.token)
     if(response.success){
localStorage.setItem("loggedin","True")
localStorage.setItem("message",response.message)

        }
     if(!response.success){
localStorage.setItem("loggedin","False")
localStorage.setItem("message",response.message)
        }

     localStorage.setItem("user", JSON.stringify(response.userinfo))
        if (response.success && response.userinfo.role =="Freelancer") {
            console.log("Its a freelancer")
           navigate("/Home")
        }
        if (response.success && response.userinfo.role =="Recruiter") {
            console.log("Its a recruiter")
            navigate("/Recruiterhome")
         }
         console.log(response.success)
         
    



    }

    return (
        <div className=''>
            <Navbar1 />
            <Navbar2 />

            <div className='h-1/6 text-3xl flex items-end justify-center mt-4'>
                <div>
                    <div className='text-center'>Log In</div>
                    <span className='text-sm'> Don't have an account?</span>
                    <Link to="/Signup" className='text-sm px-1 text-red-400 font-bold'>Sign Up</Link>
                </div>
            </div>

            <div className='flex justify-center py-5 '>
                <div className='bg-white border-2 border-black rounded-lg p-4 min-w-[35vw] '>
                    <div className='mb-3'>
                        Email{<div className='text-red-700'>{localStorage.getItem("message")}</div>}
                        < div>
                        </div>
                        <input onChange={handleform} name='email' value={form.email}
                            className='border-4 w-full' type="text" />
                    </div>
                    <div className='mb-3'>
                        < div className=''>Password</div>
                        <input onChange={handleform} name='password' value={form.password} className='border-4 w-full' type="password" />
                    </div>
                    <button onClick={handlelogin} className=' bg-orange-400 w-full my-4 p-3 rounded-xl text-white'>Log In</button>
                </div>
            </div>


        </div>



    )
}

export default Signin
