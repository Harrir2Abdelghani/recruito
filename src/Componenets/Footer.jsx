import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../Assets/Logo.jpg'

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white">
      <main className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="flex items-center ">
            <img src={logo} alt="Logo" className="w-32 h-12 mb-8" />
          </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Ready to enhance your hiring process?
        </h1>

        <a
              href="#request-demo"
              className="bg-gradient-to-r from-cyan-400  to-blue-500 text-white px-12 py-3 rounded-full shadow hover:shadow-lg hover:bg-blue-700 transition font-medium"
            >
              ✨ Request A Demo
            </a>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-2">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col  ">
            <img src={logo} alt="Logo" className="w-32 h-12 mb-4" />
            <p className="text-gray-700 text-sm text-center">
            &copy; 2024 Recruito AI. All Rights Reserved.
          </p>
          </div> 
          
          <div className="flex flex-col items-center">
             <div className="flex space-x-4 mb-4">
               <a
                 href="#"
                 className="text-gray-500 hover:text-gray-800 transition-all text-xl"
                 aria-label="Facebook"
               >
                 <FaFacebookF />
               </a>
               <a
                 href="#"
                 className="text-gray-500 hover:text-gray-800 transition-all text-xl"
                 aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition-all text-xl"
                    aria-label="LinkedIn"
                  >
                 <FaLinkedinIn />
               </a>
             </div>
             <p className="text-gray-700 text-sm text-center">
               Terms & Privacy
             </p>
           </div>
           </div>
      </footer>
    </div>
  );
};

export default LandingPage;
