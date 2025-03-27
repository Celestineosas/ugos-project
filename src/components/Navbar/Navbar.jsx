import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import { TiThMenu } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';
import Button from '../../reusables/Button';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 
  const [isVisible, setIsVisible] = useState(true); 
  const controls = useAnimation(); 
  const [prevScrollPos, setPrevScrollPos] = useState(0); 


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;


      if (currentScrollPos > prevScrollPos) {
 
        setIsVisible(false);
      } else {
  
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  
  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0, opacity: 1 }); 
    } else {
      controls.start({ y: -100, opacity: 0 }); 
    }
  }, [isVisible, controls]);


  function handleServiceNavigate() {
    navigate('/Service');
  }
  function handleAboutNavigate() {
    navigate('/About');
  }
  function handleHomeNavigate() {
    navigate('/');
  }
  function handleContactNavigate() {
    navigate('/Contact');
  }
  function handleReviewNavigate() {
    navigate('/Review');
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }} 
      animate={controls} 
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="padding-x py-5 fixed z-10 w-full bg-[#fde7b3]"
    >
      <div className="flex justify-between items-center max-container">
        <a href="/">
          <h2 className="text-[#137335] text-2xl font-montserrat leading-normal font-extrabold">
            Aimer Cleaning
          </h2>
        </a>

    
        <ul className="flex justify-center items-center gap-14 max-xl:gap-6 max-lg:hidden">
          <li>
            <a onClick={handleHomeNavigate} className="text-gray-600 font-montserrat leading-normal text-md">
              Home
            </a>
          </li>
          <li>
            <a onClick={handleAboutNavigate} className="text-gray-600 font-montserrat leading-normal text-md">
              About us
            </a>
          </li>
          <li>
            <a onClick={handleServiceNavigate} className="text-gray-600 font-montserrat leading-normal text-md">
              Services
            </a>
          </li>
          <li>
            <a onClick={handleReviewNavigate} className="text-gray-600 font-montserrat leading-normal text-md">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={handleContactNavigate} className="text-gray-600 font-montserrat leading-normal text-md">
              Contact
            </a>
          </li>
        </ul>

   
        <div onClick={handleContactNavigate} className="flex max-lg:hidden wide:mr-24">
          <Button label="Free Consultation" />
        </div>


        <button
          className="lg:hidden z-20 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className="text-3xl z-11 text-black" />
          ) : (
            <TiThMenu className="text-3xl text-black" />
          )}
        </button>

        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-white z-10 text-black transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <ul onClick={toggleMenu} className="flex flex-col space-y-10 items-center h-full py-32">
            <li>
              <a onClick={handleHomeNavigate} className="text-black leading-normal text-md">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleAboutNavigate} className="text-black leading-normal text-md">
                About
              </a>
            </li>
            <li>
              <a onClick={handleServiceNavigate} className="text-black leading-normal text-md">
                Service
              </a>
            </li>
            <li>
              <a onClick={handleReviewNavigate} className="text-black leading-normal text-md">
                Review
              </a>
            </li>
            <li>
              <a onClick={handleContactNavigate} className="text-black leading-normal text-md">
                Contact
              </a>
            </li>
            <div onClick={handleContactNavigate} className="flex wide:mr-24">
              <Button label="Free Consultation" />
            </div>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
