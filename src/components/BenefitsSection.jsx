import {React,useContext} from "react";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.jpeg";
import down from "../images/down.png";
import { useModal } from "../Modals/ModalContext";
const BenefitsSection = () => {
  
  const {openModal} =useModal();
  return (
    <div className="justify-items-center">
      <div className="heading mt-5">
        <p className="font-[640] text-2xl font-sans">
          What are
          <span className="ml-3 text-sky-500">Referral Benefits?</span>
        </p>
      </div>
      <div className=" flex justify-end w-[70vw] ">
        <div className="justify-end font-medium text-[#383434]">Enrolled</div>
        <div>
          <img src={img7} alt="" className="size-8 ml-4 mt-[-0.15rem]" />
        </div>
      </div>
      <div className="flex justify-items-center space-x-10">
        {/* ALL programs section */}
        <div className=" justify-items-center text-[1rem] bg-[hsl(0, 0.00%, 100.00%)] divide-y divide-gray-300 shadow-lg rounded-2xl   border-solid ">
          {/* <img src={img4} alt="error" /> */}
          <div className="w-65  ">
            <ul className="   font-semibold  flex flex-col justify-center  ">
              <li className="bg-blue-500 w-full h-13 rounded-t-2xl  flex justify-between items-center flex-row space-x-15">
                <p className="ml-4 text-white">ALL PROGRAMS</p>
                <img src={img5} alt="" className="size-4 mr-4" />
              </li>

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                PRODUCT MANAGEMENT{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                STRATEGY & LEADERSHIP{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                BUSINESS MANAGEMENT{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                FINTECH{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                SENIOR MANAGEMENT{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                DATA SCIENCE{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                DIGITAL TRANSFORMATION{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
              <hr className="w-60 ml-2" />

              <li className="flex justify-between items-center px-4 py-3 text-gray-700  cursor-pointer ">
                BUSINESS ANALYTICS{" "}
                <span>
                  <img src={img6} alt="" className="size-4" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Price section */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <table className="w-full border border-gray-300">
            {/* <!-- Table Header --> */}
            <thead>
              <tr className="bg-blue-100 text-left text-gray-700 border-b border-gray-300">
                <th className="px-6 py-3 font-semibold border-r border-gray-300">
                  Programs
                </th>
                <th className="px-6 py-3 font-semibold border-r border-gray-300">
                  Referrer Bonus
                </th>
                <th className="px-6 py-3 font-semibold">Referee Bonus</th>
              </tr>
            </thead>

            {/* <!-- Table Body --> */}
            <tbody className="bg-white divide-y divide-gray-300">
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Professional Certificate Program in Product Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 7,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 9,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 PG Certificate Program in Strategic Product Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 9,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 11,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Executive Program in Data Driven Product Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 10,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 10,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Executive Program in Product Management and Digital
                  Transformation
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 10,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 10,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Executive Program in Product Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 10,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 10,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Advanced Certification in Product Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 10,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 10,000</td>
              </tr>
              <tr className="">
                <td className="px-6 py-4 flex items-center border-r border-gray-300">
                  🎓 Executive Program in Product Management and Project
                  Management
                </td>
                <td className="px-6 py-4 text-gray-700 border-r border-gray-300">
                  ₹ 10,000
                </td>
                <td className="px-6 py-4 text-gray-700">₹ 10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-items-center mt-3 w-[70vw] object-contain">
        <img
          src={down}
          alt=""
          className="opacity-[40%] size-4 ml-[-1.5rem] mt-[0.8rem] "
        />
        <button className="w-35 rounded-[8px] h-10 cursor-pointer border-solid border-gray-400 border-[2px] text-gray-400">
          Show More
        </button>
      </div>

      <div>
      <button  onClick={ openModal } className="mt-15  bg-[rgb(26,126,232)]  font-medium rounded-md w-37 h-10 text-[rgb(244,226,226)] cursor-pointer">Refer Now</button>
      </div>
    </div>
  );
};

export default BenefitsSection;
