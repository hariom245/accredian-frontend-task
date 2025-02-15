import { createContext,useState,useContext } from "react";

 const ModalContext=createContext(null);

 export const ModalProvider=({children})=>{
  const [modal, setmodal] = useState(false);
  const openModal = () => setmodal(true);
  const closeModal = () => setmodal(false);
  return (
    <ModalContext.Provider value={{closeModal,modal,openModal}}>
    {children}
    </ModalContext.Provider>
  )
 }

 export const useModal=()=>useContext(ModalContext);