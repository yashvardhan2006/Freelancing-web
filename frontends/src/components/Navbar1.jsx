


import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
const Navbar1 = () => {
  const navigate = useNavigate()
  const [Profileopen, setProfileopen] = useState(false)
  const toggleprofile = () => {
    setProfileopen(!Profileopen)
    console.log(Profileopen)
  }
const handlelogout = () => {
  localStorage.clear()
  navigate("/Signin")
}

  return (
    <div>
      <nav className='flex justify-between bg-slate-300  '>

        <div>
          <img width={50} height={50} src="https://c8.alamy.com/comp/2HMMMBC/freelancer-text-on-red-brown-ribbon-badge-stamp-2HMMMBC.jpg" alt="" />
        </div>
        <div className='flex gap-5 p-3'>

         
          {localStorage.getItem("loggedin")? <div> <button onClick={handlelogout}>LOGOUT</button></div>:
          <Link to="/Signin" className='hover:font-semibold'>LOG IN </Link>
          }
          {!localStorage.getItem("loggedin")&&<Link to="/Signup" className='hover:font-semibold'>SIGN UP</Link>}
          {localStorage.getItem("loggedin") &&
          
          <div className=''>
<button onClick={() => { toggleprofile() }
            } className='relative '>Profile</button>
            {
            // <div className='absolute bg-green-400 w-1/5  top-0 right-0 z-10'><Profile/> <div className='absolute left-10 top-0'>X</div></div>
            }
          </div>}
        </div>
      </nav>
      {Profileopen && <div className='fixed top-0 min-h-[100vh] right-0 z-10'><Profile/> <div className='absolute top-0 right-0 text-black p-3'><button onClick={() => {toggleprofile()}
      }>X</button></div></div>}
    </div>
  )
}

export default Navbar1