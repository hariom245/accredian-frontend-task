import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="flex items-center px-20 justify-between  h-[79px] ">
        <div className='flex items-center space-x-5 py-0.5 '>
            <div className="flex items-center flex-col">
        <h2 className='text-sky-500  font-bold text-3xl'>accredian</h2>
        <h3 className='text-[9px]'>credentials that matter.</h3>
        </div>
        <button className='bg-[rgb(26,126,232)]  border-[rgb(26,126,232)]  font-medium rounded-md w-24 h-10 text-white'>Courses</button>
        </div>
        <ul className="flex text-black space-x-6 items-center  font-semibold">
            <li>Refer&Earn</li>
            <li>Resources  </li>
            <li>About Us</li>
            <li><button className='rounded-md bg-[#94a3b833] border-solid w-24 h-10 cursor-pointer'>Login</button></li>
            <li> <button className='bg-[rgb(26,126,232)]  font-medium rounded-md w-27 h-10 text-white cursor-pointer'>Try For free</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
