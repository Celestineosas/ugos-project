import React from 'react'

import { GiVibratingSmartphone } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { GiRingingBell } from "react-icons/gi";

const Aboutx = () => {
  return (
        <section className='padding-x sm:py-36 py-24 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
          <div className='flex flex-1 flex-col'>
            <h2 className="xl:mt-10 mt-5 font-palanquin text-black capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold">
              About Us
              <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-lg">Welcome to AIMER CLEANING SERVICES, where cleanliness meets passion! We are a family-owned cleaning company founded by two individuals who have a genuine love for cleaning. Our passion for making spaces shine is what led us to create this company, and it’s at the heart of everything we do.
               At AIMER CLEANING SERVICES, we believe that a clean environment not only looks good but also promotes well-being and productivity. Be it your home, office, or company space, we are dedicated to delivering top-notch cleaning services that leave every corner sparkling.</p>
            </h2>
          </div>
          <div className='flex flex-col gap-14 justify-center items-center mt-10'>
            <div className='flex lg:flex-row flex-col justify-center items-center'>
              <GiVibratingSmartphone className='text-[200px] mb-10 text-white p-[8px] w-[90px] h-[90px] mr-[32px] rounded-[20px] bg-[#4f6f1d]' />
              <div className='flex flex-col gap-6'>
              <h3 className='text-black font-semibold xl:max-w-lg lg:max-w-md text-xl font-montserrat'>Research-Driven Cleaning</h3>
              <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-sm"> We clean with a design-first mindset, ensuring your space aesthetics are preserved while maintaining a spotless, fresh, and welcoming environment that reflects your style and enhances your comfort.</p>
              </div>
            </div>
          
            <div className='flex lg:flex-row flex-col justify-center items-center'>
              <CiSettings className='text-[200px] mb-10 text-white p-[8px] w-[90px] h-[90px] mr-[32px] rounded-[20px] bg-[#4f6f1d]' />
              <div className='flex flex-col gap-6'>
              <h3 className='text-black font-semibold xl:max-w-lg lg:max-w-md text-xl font-montserrat'> Strategic Cleaning Plans</h3>
              <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-sm"> Our strategic approach combines optimized schedules, advanced cleaning techniques, and meticulous attention to detail, delivering consistent, high-quality service that aligns perfectly with your unique needs and goals.</p>
              </div>
            </div>
          
            <div className='flex lg:flex-row flex-col justify-center items-center'>
              <GiRingingBell className='text-[200px] mb-10 text-white p-[8px] w-[90px] h-[90px] mr-[32px] rounded-[20px] bg-[#4f6f1d]' />
              <div className='flex flex-col gap-6'>
              <h3 className='text-black font-semibold xl:max-w-lg lg:max-w-md text-xl font-montserrat'>Design-Focused Cleaning</h3>
              <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-sm"> We clean with a design-first mindset, ensuring your space aesthetics are preserved while maintaining a spotless, fresh, and welcoming environment that reflects your style and enhances your comfort.</p>
              </div>
            </div>
          
        
          </div>
        </section>

  )
}

export default Aboutx
