import React, { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
      <div className="mt-4 sm:mt-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-trial"
              className="bg-transparent text-blue-600  px-12 py-2 rounded-full border border-gray-400 shadow hover:shadow-lg hover:bg-blue-50 transition "
            >
              FAQs
            </a>
            </div>
        <div className="space-y-4">
          {/* Question 1 */}
          <div
            className={`border rounded-lg shadow-sm ${
              open === 1 ? "border-cyan-500" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(1)}
            >
              <span className="text-lg font-medium text-gray-800">
                What is an AI Agent?
              </span>
              <svg
                className={`w-6 h-6 transform ${
                  open === 1 ? "rotate-180" : ""
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {open === 1 && (
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  An AI agent is a software system that understands language,
                  learns from data, and takes actions automatically to achieve
                  specific goals. Key capabilities include:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Natural Language Processing to interpret resumes</li>
                  <li>Adaptive Learning to improve efficiency</li>
                  <li>Task Automation to handle repetitive steps</li>
                  <li>Data-Driven Insights for better decisions</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className={`border rounded-lg shadow-sm ${
              open === 2 ? "border-cyan-500" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(2)}
            >
              <span className="text-lg font-medium text-gray-800">
                What are the Benefits of Using Recruito's AI Agent?
              </span>
              <svg
                className={`w-6 h-6 transform ${
                  open === 2 ? "rotate-180" : ""
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {open === 2 && (
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  Recruito's AI Agent provides the following benefits:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Automates tedious tasks</li>
                  <li>Improves accuracy with machine learning</li>
                  <li>Offers instant insights for better decisions</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className={`border rounded-lg shadow-sm ${
              open === 3 ? "border-cyan-500" : "border-gray-200"
            }`}
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(3)}
            >
              <span className="text-lg font-medium text-gray-800">
                Next Steps?
              </span>
              <svg
                className={`w-6 h-6 transform ${
                  open === 3 ? "rotate-180" : ""
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {open === 3 && (
              <div className="px-6 pb-4 text-gray-600">
                <p>
                  Start your journey with Recruito AI by signing up and
                  exploring how it can transform your hiring process.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
