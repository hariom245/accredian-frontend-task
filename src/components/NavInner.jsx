import React from 'react'
import './Navbar.css'
const NavInner = () => {
  return (
    <div className='mt-1.5  flex items-center justify-center border-[#1a73e826] border-[2px] rounded-4xl w-[30rem] h-[3rem] bg-[#1a73e826]'>
      <ul className='flex font-medium space-x-15 items-center'>
        <li>Refer</li>
        <li>Benefits</li>
        <li>FAQs</li>
        <li>Support</li>
      </ul>
    </div>
  )
}

export default NavInner
