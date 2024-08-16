import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div className='relative flex justify-between p-4 bg-gray-200'>

        <Link to="/artificial" className=' relative group transition-all '>


            <span className='group-hover:font-bold'>Artificial Intelligence</span>
           

        </Link>
        <Link to="/graphic" className='relative  group'>
            <span className='group-hover:font-bold'>Graphic designing</span>
            
        </Link>
        <Link to="/web" className='relative  group'>
            <span className='group-hover:font-bold'>Web Development</span>
        </Link>
        <Link to="/digital" className='relative group'>

            <span className='group-hover:font-bold'>Digital marketing</span>
        
        </Link>





        <Link to="/machine" className='relative  group'>
            <span className='group-hover:font-bold'>Machine learning</span>
            
        </Link>
       
    </div>

)
}

export default Navbar2