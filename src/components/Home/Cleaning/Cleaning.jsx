import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';
import { MdCleanHands } from 'react-icons/md';
import { GiKitchenTap } from 'react-icons/gi';
import { GiFloorPolisher } from 'react-icons/gi';
import { FaToilet } from 'react-icons/fa';
import { GiOfficeChair } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa6';

const Cleaning = () => {
  const navigate = useNavigate();

  const textControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector('.cleaning-text');

   
      if (textElement) {
        const textRect = textElement.getBoundingClientRect();
        if (textRect.top < window.innerHeight && textRect.bottom > 0) {
          textControls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textControls]);

  function handleServiceNavigation() {
    navigate('/Service');
  }

  return (
    <section className='padding flex justify-center items-center flex-col gap-10 w-full max-container'>

      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        animate={textControls} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        className='flex flex-1 flex-col cleaning-text'
      >
        <h3 className='text-[#8fae48] text-center text-xl font-semibold font-montserrat px-3 py-4'>Services</h3>
        <h2 className="xl:mt-10 mt-5 font-palanquin text-[#2e3d12] text-4xl max-sm:text-3.5xl font-bold text-center">
          OUR BEST CLEANING SERVICES
        </h2>
      </motion.div>

  
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-3 gap-14'>
        <div className='flex flex-1 flex-col w-full max-sm:w-full items-center text-center shadow-custom p-5'>
          <MdCleanHands size='2.8rem' color='green' />
          <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-2xl">HOUSE CLEANING</h3>
          <p className="font-palanquin text-[#3a4e1c] mt-3">Professional transformation of your home with focus oriented cleaning for a lively home.</p>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full items-center text-center shadow-custom p-5'>
          <GiKitchenTap size='2.8rem' color='blue' />
          <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-2xl">AIR BNB CLEANING</h3>
          <p className="font-palanquin text-[#3a4e1c] mt-3">Deep cleaning service to ensure your property is lively and ready for the next occupant.</p>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full items-center text-center shadow-custom p-5'>
          <GiFloorPolisher size='2.8rem' color='brown' />
          <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-2xl">POST CONSTRUCTION</h3>
          <p className="font-palanquin text-[#3a4e1c] mt-3">Restore the vibrant look to the area after building and give it a satisfying look for the incoming occupant.</p>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full items-center text-center shadow-custom p-5'>
          <FaToilet size='2.8rem' color='orange' />
          <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-2xl">COMMERCIAL CLEANING</h3>
          <p className="font-palanquin text-[#3a4e1c] mt-3">Professional cleaning of various business spaces including schools, retail stores, restaurants, schools, hospitals and other commercial buildings.</p>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full items-center text-center shadow-custom p-5'>
          <GiOfficeChair size='2.8rem' color='purple' />
          <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-2xl">OFFICE CLEANING</h3>
          <p className="font-palanquin text-[#3a4e1c] mt-3">Boost productivity with professional office cleaning for a tidy and welcoming workspace environment.</p>
        </div>
        <div
          onClick={handleServiceNavigation}
          className='flex flex-1 justify-center flex-col w-full max-sm:w-full bg-black shadow-custom p-10'
        >
          <h3 className="text-white font-montserrat font-semibold text-3xl">Other</h3>
          <p className="font-palanquin text-xl text-gray-500 mb-5">Services You Can Explore</p>
          <FaArrowRight size='2rem' color='white' />
        </div>
      </div>
    </section>
  );
};

export default Cleaning;