import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import reviewData from './reviewdata';
import { FaStar } from 'react-icons/fa';

const Blog = () => {

  const textControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector('.blog-text');

      
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

  const ReviewElement = reviewData.map((reviewItem) => (
    <div className='flex flex-1 flex-col w-full max-sm:w-full items-center' key={reviewItem.id}>
      <img className="w-full h-[350px] object-cover" src={reviewItem.img} alt='blog-img' />
      <div className='flex mt-5 items-center gap-32'>
        <p className='font-montserrat text-[#3a4e1c] text-lg font-semibold'>{reviewItem.service}</p>
        <div className='flex gap-2'>
          <FaStar color='gold' />
          <p className='font-montserrat text-[#3a4e1c] text-sm font-semibold'>{reviewItem.rating}</p>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className="text-[#2e3d12] font-montserrat mt-5 font-semibold text-xl">{reviewItem.name}</h3>
        <p className="font-palanquin text-[#3a4e1c] mt-3">{reviewItem.comment}</p>
      </div>
    </div>
  ));

  return (
    <section className='padding flex justify-center items-center flex-col gap-10 w-full max-container'>
     
      <motion.div
        initial={{ opacity: 0, y: 100 }} 
        animate={textControls} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        className='flex flex-1 flex-col blog-text'
      >
        <h3 className='text-[#8fae48] text-center text-xl font-semibold font-montserrat px-3 py-4'>Reviews</h3>
        <h2 className="xl:mt-10 mt-5 font-palanquin text-[#2e3d12] text-4xl max-sm:text-3.5xl font-bold text-center">
          OUR LATEST REVIEWS
        </h2>
      </motion.div>

      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-3 gap-14'>
        {ReviewElement}
      </div>
    </section>
  );
};

export default Blog;
