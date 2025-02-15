import "./App.css";
import Navbar from "./components/Navbar";
import NavInner from "./components/NavInner";
import Middle from "./components/Middle";
import SecondImageSection from "./components/SecondImageSection";
import BenefitsSection from "./components/BenefitsSection";
import Questions from "./components/Questions";
import Modal from "./Modals/Modal";
import { ModalProvider } from "./Modals/ModalContext";

function App() {
  
  return (
    <>
    <ModalProvider>
      <div className="fixed-screen justify-items-center items-center h-[60px] w-full text-black   bg-[#1a73e826] ">
        <p className="py-4 text- text-center">
          Navigate your ideal career path with tailored expert devices.
          <span className="ml-3 font-semibold text-sky-600">
            Contact Expert
          </span>
        </p>
      </div>
      <Navbar />
      <div className="justify-items-center items-center align-middle">  <NavInner />   </div>
      <div className=" justify-items-center items-center mt-7">  <Middle />   </div>
      <div className="mt-20">     <SecondImageSection />   </div>
      <div className=" w-full h-[45rem] mt-15">  <BenefitsSection />  </div>
      <div className=" w-full h-[45rem] mt-15">  <Questions />  </div>
      <div><Modal/></div>
    </ModalProvider>
    </>
  );
}

export default App;
