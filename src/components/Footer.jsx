import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6 lg:px-20">
    {/* <!-- Footer Grid --> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Programs Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Programs</h3>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Data Science & AI <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Product Management <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Business Analytics <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Digital Transformation <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Business Management <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Project Management <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Strategy & Leadership <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-700 pb-2">
            Senior Management <span className="text-gray-400 text-lg">+</span>
          </li>
          <li className="flex justify-between items-center">
            Fintech <span className="text-gray-400 text-lg">+</span>
          </li>
        </ul>
      </div>

      {/* <!-- Contact Us Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-400 text-sm mb-2">Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-gray-300 hover:underline">admissions@accredian.com</a></p>
        <p className="text-gray-400 text-sm mb-2">Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-gray-300 hover:underline">pm@accredian.com</a></p>
        <p className="text-gray-400 text-sm mb-2">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
        <p className="text-gray-400 text-sm mb-2">Product Management Admission Helpline: +91 9625811095</p>
        <p className="text-gray-400 text-sm mb-2">Enrolled Student Helpline: +91 7969322507</p>
        <p className="text-gray-400 text-sm mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
        
        <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
        <div className="flex space-x-4 mt-3">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* <!-- Accredian Section --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Accredian</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:underline">About</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Career</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Admission Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Referral Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Terms Of Service</a></li>
          <li><a href="#" className="text-gray-400 hover:underline">Master FAQs</a></li>
        </ul>
      </div>
    </div>

    {/* <!-- Bottom Footer --> */}
    <div className="mt-10 text-center text-gray-500 text-sm">
      © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
    </div>
  </div>
</footer>

  )
}

export default Footer
