import {React} from "react";
import img8 from "../images/upload.png";
import img7 from "../images/down.png";
import img9 from "../images/img9.png"
import img10 from "../images/Background.jpg"
// import { useModal } from "../Modals/ModalContext";
const Questions = () => {
  return (
    <div className="justify-items-center">
      <div className="heading mt-5">
        <p className="font-[640] text-2xl font-sans">
          Frequently Asked
          <span className="ml-3 text-sky-500">Questions?</span>
        </p>
      </div>

      <div className="flex justify-items-center space-x-30 w-[80vw] mt-15">
        <div className="flex flex-col space-y-8 ">
          <div className="border-solid justify-items-center shadow-lg rounded-[9px] w-[11.5rem] h-[3rem] ">
            <p className="py-2 text-sky-600 font-semibold">Eligibility</p>
          </div>

          <div className="border-solid justify-items-center  rounded-[9px] w-[11.5rem] h-[3rem] border-gray-400 border-[2px]">
            <p className="py-2  font-semibold text-gray-500">How To use?</p>
          </div>

          <div className="border-solid justify-items-center  rounded-[9px] w-[11.5rem] h-[3rem] border-gray-400 border-[2px]">
            <p className="py-2  font-semibold text-gray-500">
              Terms & Conditions
            </p>
          </div>
        </div>

        <div className="flex flex-col  space-y-15">
          <div className=" flex">
            <p className="text-sky-600 font-bold">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program ?
            </p>
            <img src={img8} alt="" className="size-3 ml-2 mt-1 opacity-55" />
          </div>
          <div>
            <p>
              No the program is designed to be inclusive of all the levels of
              experience. All the topics will be covered from basics, making it
              suitable for all the individuals from any field of work.
            </p>
          </div>

          <div className="flex space-x-100">
            <p className="font-bold">
              What is minimum System Confuguration required?
            </p>
            <img src={img7} alt="" className="size-4 mt-2 " />
          </div>
        </div>
      </div>


      <div className="mt-50 mb-50">
        <img src={img9} alt="" />
      </div>
      <img src={img10} alt="" />
    </div>
  );
};

export default Questions;
