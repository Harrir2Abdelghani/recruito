import React from 'react';
import { useInView } from 'react-intersection-observer';
import feature1 from '../Assets/feature1.JPG';
import feature2 from '../Assets/feature2.JPG';
import feature3 from '../Assets/feature3.JPG';
import feature4 from '../Assets/feature4.JPG';
import feature5 from '../Assets/feature5.JPG';

const Recruitments = () => {
  const Section = ({ children, className }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
      <div
        ref={ref}
        className={`${className} transform transition-transform duration-1000 ${
          inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-trial"
              className="bg-white text-blue-700  px-8 py-2 rounded-full border border-gray-400 shadow hover:shadow-lg hover:bg-blue-50 transition"
            >
              Features
            </a>
          </div>
          <p className="mt-6 text-2xl leading-8 tracking-tight  text-gray-900 sm:text-5xl">
            Streamline your recruitment
          </p>
          <p className="mt-6 text-2xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
            with our advanced features
          </p>
        </div>
        <div className="mt-10 space-y-16 mx-14">
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                Candidate Sourcing & Job Posting
              </h3>
              <p className="mt-4 text-gray-600">
                Recruito automatically posts your position or actively hunts
                top candidates across multiple platforms. No human intervention
                needed.
              </p>
            </div>
            <div>
              <img
                src={feature1}
                alt="Candidate Sourcing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-last md:order-first">
              <img
                src={feature2}
                alt="Resume Screening"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                Automated Resume Screening & Filtering
              </h3>
              <p className="mt-4 text-gray-600">
                Our AI instantly sorts and prioritizes resumes, highlighting
                only the strongest matches and discarding unqualified
                applicants.
              </p>
            </div>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                Online Assessment
              </h3>
              <p className="mt-4 text-gray-600">
                Candidates complete a quick skill or behavioral test to
                validate their capabilities. This process is seamlessly
                integrated and fully automated.
              </p>
            </div>
            <div>
              <img
                src={feature3}
                alt="Online Assessment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-last md:order-first">
              <img
                src={feature4}
                alt="AI Video Interviews"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                AI Video Interviews
              </h3>
              <p className="mt-4 text-gray-600">
                An AI-driven virtual interviewer conducts dynamic, adaptive
                interviews, capturing both technical insights and soft skills.
                Everything is entirely hands-free.
              </p>
            </div>
          </Section>

          <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">
                Final Shortlist for Line Manager
              </h3>
              <p className="mt-4 text-gray-600">
                Recruito presents a curated list of the top performers,
                complete with interview recordings and evaluations, so you can
                make a swift, confident hiring decision.
              </p>
            </div>
            <div>
              <img
                src={feature5}
                alt="Final Shortlist"
                className="rounded-lg shadow-lg"
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Recruitments;
