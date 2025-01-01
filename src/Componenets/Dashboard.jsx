import React from 'react'
import dashboard from '../Assets/Dashboard.JPG'
import dashboard1 from '../Assets/dashboard1.JPG'
import dashboard2 from '../Assets/dashboard2.JPG'
import gsk from '../Assets/GSK.png'
import linkedin from '../Assets/linkedin.png'
import intys from '../Assets/intys.jpg'
import ogilvy from '../Assets/ogilvy.jpg'


const Dashboard = () => {
  return (
    <div className="col-span-2 -mt-4 cols" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="relative mt-10">
        <img
          src={dashboard}
          alt="dashboard"
          className="w-[1000px] mx-auto"
        />

        <img
          src={dashboard1}
          alt="left-decoration"
          className="absolute top-32 left-[-120px] w-[200px] hidden lg:block"
        />

        <img
          src={dashboard2}
          alt="right-decoration"
          className="absolute top-16 right-[-100px] w-[200px] hidden lg:block"
        />
      </div>

      <div className="bg-white py-12 w-full">
        <div className="text-center mb-8 px-4 mt-4">
          <h2 className="text-md md:text-1xl font-bold text-gray-500 mt-2">
            Trusted By The World Leading Organisations
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center mx-8  sm:mx-16 md:mx-32 lg:mx-64 space-x-4 gap-8 md:gap-12 lg:gap-20 mb-12 ">
          <img src={gsk} alt="gsk" className="w-12 h-12 my-10" />
          <img src={intys} alt="intys" className="w-12 h-12 my-10" />
          <img src={ogilvy} alt="ogilvy" className="w-12 h-12 my-10" />
          <img src={linkedin} alt="linkedin" className="w-12 h-16 my-10" />
          <img src={ogilvy} alt="ogilvy" className="w-12 h-12 my-10" />
          <img src={gsk} alt="gsk" className="w-12 h-12 my-10" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard