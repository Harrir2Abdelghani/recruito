import React from "react";
import person1 from '../Assets/person1.svg'
const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Martin",
      company: "Company, HR",
      feedback:
        "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.", 
    },
    {
      name: "Sophia Lee",
      company: "TechCorp, Hiring Manager",
      feedback:
      "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
    {
      name: "John Doe",
      company: "Startup Inc., Founder",
      feedback:
      "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
      <div className="mt-4 sm:mt-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-trial"
              className="bg-transparent text-blue-600  px-12 py-2 rounded-full border border-gray-400 shadow hover:shadow-lg hover:bg-blue-50 transition "
            >
              Testimonials
            </a>
            </div>
        <h2 className="text-5xl  text-black font-bold mb-6">
          Don’t just take our word for it—see 
          <br /> <p className="text-4xl">what our clients say about
          Recruito AI.</p>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={person1}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
              <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0
                  ? "bg-cyan-500"
                  : "bg-gray-300 hover:bg-cyan-400 transition"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
