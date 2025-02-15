import React from "react";
import "./Navbar.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import { useModal } from "../Modals/ModalContext";
const Middle = () => {
  const {openModal}=useModal();
  return (
    <div className=" shadow-2xl flex flex-col  rounded-3xl  border-solid  object-contain  w-[1000px] h-[35rem] bg-[#b5d1f526]">
      <div className="h-[6.5rem] overflow-hidden flex space-x-195 ">
        <img src={img1} alt="error" className="w-30 z-10 rotate-105 mt-[-35px] ml-[-5px] " />
        {/* <img src={img1} alt="error" className="w-full z-10 rotate-180 h-[9rem] mt-[-10px] ml-[150px] py-3   " /> */}
        <img src={img1} alt="error" className="w-30   z-10 ml- rotate-185 mt-[-40px]  " />

      </div>
      <div className="flex object-contain max-h-[430px] ">
        <div className="left  w-[50%]">
          <h1 className="font-medium text-6xl ml-8 mt-5">Lets Learn & Earn</h1>
          <p className="mt-16 ml-8 font-medium text-3xl ">
            Get a chance to win upto
            <span className="ml-4 text-sky-500 font-medium text-5xl">
              Rs. 15,000
            </span>
          </p>
          <button onClick={openModal} className="mt-15 ml-20 bg-[rgb(26,126,232)]  font-medium rounded-md w-37 h-10 text-[rgb(244,226,226)] cursor-pointer">Refer Now</button>
        </div>
        <div className="right object-contain  max-h-full flex flex-row w-full ">
            <img src={img2} alt="" className=" mt-[-10.15rem]  size-[45rem]   z-5"/>
          <img src={img1} alt="" className="h-[7rem] ml-[-12rem] mt-[7rem] rotate-108 " />
          <img src={img1} alt="" className="h-[7rem] ml-[-25rem] rotate-180 mt-[-1.5rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Middle;
