import React from "react"
import { FaAward, FaShieldVirus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../../../reusables/Button';

const Service = () => {

  const navigate = useNavigate();
  function handleContactNavigate() {
    navigate('/Contact')
  }

  return (
    <section className='padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container bg-[#fde7b3]'>
      <div className='flex flex-1 flex-col'>
        <h3 className='text-[#fb9315] text-center text-xl font-semibold font-montserrat px-3 py-4'>Check Us Out</h3>
        <h2 className="xl:mt-10 mt-5 font-palanquin text-black capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl max-sm:text-center font-bold">
          We maintain healthy<br></br> environment through<br></br>our services
        </h2>
        <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-lg">Explore our range of professional cleaning services designed to meet your needs and exceed your expectations. Quality guaranteed!</p>
        <div className='mt-11 flex gap-5 ' onClick={handleContactNavigate}>
          <Button label="Contact Us" />
        </div>

      </div>
      <div className='flex flex-col gap-10 justify-center items-center max-xl:mb-20'>
        <div className='flex flex-1 justify-center items-center'>
          <img src='./images/cleaning service-rafiki (5).png' alt='backgrondImg' width={570} height={520} className='pointer-events-none object-contain lg:mt-0 -mt-36 max-sm:-mt-24' />
        </div>
        <div className='flex flex-col sm:flex-row text-center gap-5 w-full sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[600px] max-xl:-m-10 '>
          <div className='flex gap-3 flex-col items-center text-center shadow-custom p-5'>
            <FaAward size='2.8rem' />
            <h3 className="text-black font-montserrat font-semibold text-2xl">Our Mission in cleaning</h3>
            <p className="font-palanquin text-gray-500">To deliver exceptional cleaning services that enhance your space, ensuring comfort, cleanliness, and peace of mind.</p>
          </div>
          <div className='flex gap-3 flex-col items-center text-center shadow-custom p-5'>
            <FaShieldVirus size='2.8rem' color='green' />
            <h3 className="text-black font-montserrat font-semibold text-2xl">Our Vision in cleaning</h3> 
            <p className="font-palanquin text-gray-500">To become the trusted leader in cleaning solutions, setting new standards for quality and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Service