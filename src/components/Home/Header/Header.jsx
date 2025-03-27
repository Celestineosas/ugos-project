import React  from 'react'
import Button from '../../../reusables/Button'

import { useNavigate } from 'react-router-dom';

import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate();
  function handleContactNavigate() {
    navigate('/Book')
    console.log('Book Now')
  }

  return (
    <section className='padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container bg-[#fde7b3]'>
      <div className='flex flex-1 flex-col'>
        <h2 className="xl:mt-10 mt-16 font-palanquin text-[#092819] capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold">
          Professional
          <span className="text-[#137335]"> Cleaning Service</span>
        
        </h2>
        <p className=" mt-4 info-text lg:max-w-lg">Life's too short to spend it cleaning. Let us handle the mess, so you can enjoy what matters most. At Aimer, we offer professional, reliable, and affordable services tailored to your needs - because your time is spent living not scrubbing.</p>

        <div className='mt-11 flex gap-5'>
          <div onClick={handleContactNavigate}>
          <Button label="Book Now"/>
          </div>
          <div className='flex gap-6 mt-2'>
            <FaPhoneAlt className='text-[30px] '/>
            <a href='tel:+14313345256'><p >+1 (431) 334-5256</p></a>
          </div>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src='./images/cleaning service-cuate (1).png' alt='backgrondImg' width={570} height={520} className='pointer-events-none object-contain lg:mt-0 -mt-36 max-sm:-mt-24'/>
      </div>
    </section>
    
  )
}

export default Header
