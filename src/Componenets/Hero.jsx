import React, { useState } from "react";
import logo from "../Assets/Logo.jpg";
import 'animate.css';
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 min-h-screen">
      <header className="bg-white shadow-md   mx-6 md:mx-28 rounded-3xl py-2 mb-4 relative" style={{ top: "2rem" }}>
        <div className="container mx-auto  px-4 py-3 flex justify-between items-center">
          <div className="flex items-center animate__animated animate__fadeIn">
            <img src={logo} alt="Logo" className="w-32 h-8" />
          </div>
          <nav
             className={`${
               menuOpen ? "block" : "hidden"
             } absolute md:static bg-white w-full md:w-auto md:flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 top-16 left-0 md:top-0 md:left-0 p-6 md:p-0 shadow-lg md:shadow-none rounded-lg md:rounded-none z-50`}
           >
            <a
               href="#home"
               className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-blue-100"
             >
               Home
             </a>
             <a
               href="#features"
               className="text-black font-medium hover:text-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-blue-100"
             >
               Features
             </a>
             <a
               href="#pricing"
               className="text-black font-medium hover:text-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-blue-100"
             >
              Pricing
             </a>
             <a
               href="#resource"
               className="text-black font-medium hover:text-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-blue-100"
             >
               Resource
             </a>
           </nav>
          <div className="hidden md:block animate__animated animate__fadeIn">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-400  to-blue-500 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12">
        <div className="container mx-auto text-center animate__animated animate__fadeIn">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight font-sans">
            Revolutionize Your Hiring 
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight font-sans">Process with {""}
            <span className="text-cyan-400"> Recruito AI</span>
            <span className="text-blue-400 text-2xl"> ✨</span>
            </p>
          </p>

          <p className="mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Your fully automated hiring assistant that sources, 
            screens, and interviews candidates effortlessly.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-trial"
              className="bg-white text-black px-12 py-3 rounded-full border border-gray-400 shadow hover:shadow-lg hover:bg-blue-50 transition font-medium"
            >
              Start Your Free Trial
            </a>
            <a
              href="#request-demo"
              className="bg-gradient-to-r from-cyan-400  to-blue-500 text-white px-12 py-3 rounded-full shadow hover:shadow-lg hover:bg-blue-700 transition font-medium"
            >
              ✨ Request A Demo
            </a>
          </div>

          <div className="mt-24">
            <a
              href="#learn-more"
              className="text-gray-700  "
            >
              See How We Create An Autonomous{" "}
              <span className="text-gray-700 underline hover:text-blue-600 transition">AI Agent</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
