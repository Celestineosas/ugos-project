import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';
import data from './data';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../../reusables/Button';

const About = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);

  const bigTextControls = useAnimation();
  const smallTextControls = useAnimation();
  const dataElementControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const bigTextElement = document.querySelector('.big-text');
      const smallTextElement = document.querySelector('.small-text');
      const dataElementContainer = document.querySelector('.data-element-container');


      if (bigTextElement) {
        const bigTextRect = bigTextElement.getBoundingClientRect();
        if (bigTextRect.top < window.innerHeight && bigTextRect.bottom > 0) {
          bigTextControls.start({ opacity: 1, y: 0 });
        }
      }

      if (smallTextElement) {
        const smallTextRect = smallTextElement.getBoundingClientRect();
        if (smallTextRect.top < window.innerHeight && smallTextRect.bottom > 0) {
          smallTextControls.start({ opacity: 1, y: 0 });
        }
      }

      if (dataElementContainer) {
        const dataElementRect = dataElementContainer.getBoundingClientRect();
        if (dataElementRect.top < window.innerHeight && dataElementRect.bottom > 0) {
          dataElementControls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bigTextControls, smallTextControls, dataElementControls]);

  function handleContactNavigate() {
    navigate('/Contact');
  }

  function handleAddSelection(currentId) {
    setSelection(selection === currentId ? null : currentId);
  }

  const dataElement = data.map((dataItem) => (
    <div
      className='flex flex-col relative w-full max-w-[350px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] shadow-[-3px_10px_34px_-10px_rgba(0,0,0,0.36)]'
      key={dataItem.id}
    >
      <h3
        className={`${
          selection === dataItem.id
            ? 'bg-[#4f6f1d] text-white text-xl font-bold font-montserrat flex items-center p-[15px_20px]'
            : 'bg-white shadow-[-8px_10px_5px_-7px_rgba(102,102,102,0.15)] text-[#2e3d12] text-xl font-bold font-palanquin flex items-center p-[15px_20px] mb-0'
        }`}
      >
        {dataItem.question}
      </h3>
      {selection === dataItem.id ? (
        <FaTimes
          onClick={() => handleAddSelection(dataItem.id)}
          className='text-white text-xs absolute right-[25px] top-[25px]'
        />
      ) : (
        <FaPlus
          onClick={() => handleAddSelection(dataItem.id)}
          className='text-[#4f6f1d] text-xs absolute right-[25px] top-[25px]'
        />
      )}
      {selection === dataItem.id && (
        <p className='flex text-[#666666] items-center p-[10px_30px]'>{dataItem.answer}</p>
      )}
    </div>
  ));

  return (
    <section className='padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <motion.h3
          initial={{ opacity: 0, y: 50 }} 
          animate={bigTextControls} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          className='text-[#8fae48] text-center text-xl font-semibold font-montserrat px-3 py-4 big-text'
        >
          About Us
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 100 }} 
          animate={bigTextControls} 
          transition={{ duration: 1, ease: 'easeOut' }} 
          className='xl:mt-10 mt-5 font-palanquin text-[#2e3d12] capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold big-text'
        >
          We Are Providing The Best Cleaning Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }} 
          animate={smallTextControls} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} 
          className='mt-7 text-sm font-palanquin leading-normal text-[#3a4e1c] lg:max-w-lg small-text'
        >
          Welcome to AIMER CLEANING SERVICES, where cleanliness meets passion! We are a family-owned cleaning company founded by two individuals who have a genuine love for cleaning. Our passion for making spaces shine led us to establish the company. Cleanliness is at the heart of everything we do.
        </motion.p>
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={dataElementControls} 
        transition={{ duration: 1, ease: 'easeOut' }} 
        className='flex flex-col gap-14 justify-center items-center data-element-container'
      >
        <h3 className='text-[#2e3d12] mt-7 font-semibold xl:max-w-lg lg:max-w-md text-xl font-montserrat'>
          Discover premium, efficient and reliable cleaning services tailored to meet your needs and designed to keep your space immaculate and refreshing.
        </h3>
        <div className='flex flex-col w-full flex-1 gap-5 items-center'>{dataElement}</div>
        <div className='mt-11 flex gap-5' onClick={handleContactNavigate}>
          <Button label='Contact Us' text='text-white' />
        </div>
      </motion.div>
    </section>
  );
};

export default About;