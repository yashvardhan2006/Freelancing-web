import React, { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
import LoginPopup from './components/LoginPopup/LoginPopup'

import Signup from './components/Signup'
import Signin from './components/Signin'



const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>

    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></> }
    <div className='app'>
      <Navbar1 setShowLogin={setShowLogin}/>
      <Navbar2/>
      <Routes>
        <Route/>
      </Routes>
    </div> */}
   
    </>
  )
}

export default App
