import { useState } from "react";
import { useModal } from "./ModalContext";
import Hourglass from "../images/Hourglass.gif"

const Modal = () => {
  const { closeModal, modal } = useModal();

  const [loading, setloading] = useState(false)
  const [credentials, setcredentials] = useState({
    refreeName: "",
    refreeEmail: "",
    referrerName: "",
    referrerEmail: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setcredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)

     try {
      
     
      const response = await fetch("http://localhost:3001/referals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({refreeName:credentials.refreeName,
          refreeEmail:credentials.refreeEmail,
          referrerName:credentials.referrerName,
          referrerEmail:credentials.referrerEmail}),
      });

      const result = await response.json();

      if (response.ok) {
        setloading(false)
        alert("Email Sent!"); // Show success message
        closeModal(); // Close modal after submission
      } else if(response.status(400)) {
        alert(`Error: ${result.message}`); // Show error from backend
      }
    }catch (error) {
      setloading(false)
      console.error("Error submitting form:", error);
      alert("Something went wrong! Please try again.");
      closeModal()
    }
  };
  return (
    <>
      {modal && <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
        {/* Modal Content with White Background */}
        <div className="bg-white shadow-xl rounded-lg w-full max-w-lg p-6">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Send Referral Now
            </h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-4">
            <form className="space-y-4" onSubmit={handleSubmit} >
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-900"
                >
                  Refree Name
                </label>
                <input
                  type="text"
                  name="refreeName"
                  value={credentials.refreeName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name of person you are referring to"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Refree Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="refreeEmail"
                  value={credentials.refreeEmail}
                  placeholder="email your are referring to"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-900"
                >
                  Referrer Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="referrerName"
                  value={credentials.referrerName}
                  placeholder="your name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Referrer Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="referrerEmail"
                  value={credentials.referrerEmail}
                  placeholder="your email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <>
                      <img src={Hourglass} alt="" />
                      
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default Modal;
