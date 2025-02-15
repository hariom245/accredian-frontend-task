import React from 'react'
import img3 from'../images/img3.svg'
import { useModal } from '../Modals/ModalContext'
const SecondImageSection = () => {
  const {openModal}=useModal();
  return (
    <div className='object-contain justify-items-center w-full h-[45rem] bg-[#1a73e826] '>
        <div className='p-7'>
        <p className='font-[640] text-2xl font-sans'>How do I 
            <span className='ml-3 text-sky-500'>Refer?</span>
        </p>
        </div>
        
      <img src={img3} alt="" className='mt-5'/>
      <button onClick={openModal} className=' bg-[rgb(26,126,232)]  font-medium rounded-md w-37 h-10 text-[rgb(244,226,226)] cursor-pointer mt-14'>Refer Now</button>
    </div>
  )
}

export default SecondImageSection
