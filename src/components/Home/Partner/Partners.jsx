import React from 'react';
import { motion } from 'framer-motion';
// import { h3 } from 'framer-motion/client';


// const textAnimate = useAnimation()

const Partner = ({ name = 'NORTHTOWNE', logoSrc = '/images/IMG-20251019-WA0003.jpg' }) => {
  return (
    <section className=" flex items-center justify-center w-full max-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white/5 rounded-xl p-8 flex flex-col items-center text-center"
        >
        <h3 className="text-[#fb9315] text-center text-xl font-semibold font-montserrat px-3 py-4">Partners</h3>
        <h2 className="xl:mt-8 mt-3 font-palanquin text-black text-4xl max-sm:text-3.5xl font-bold text-center">
          OUR CLIENT
        </h2>
        <p className="font-palanquin text-gray-400 mt-2 max-w-2xl">
          Proud partner — {name}. We collaborated on professional cleaning services to deliver excellent results.
        </p>

          <motion.img
            src={logoSrc}
            alt={name}
            className="mx-auto w-full max-w-[320px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] object-contain object-center flex items-center justify-center"
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
      </motion.div>
    </section>
  );
};

export default Partner;