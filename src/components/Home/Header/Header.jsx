import React, { useRef } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineNorthEast } from "react-icons/md";
// import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate()
  function handleContactNavigate(){
    navigate('/Contact')
  }
  return (
    <div className='header'>
     <div className='content'>
      <div className='description'>
        <h1 className='text'><span>Professional</span> Cleaning <br></br>Service For your home</h1>
        <p>Life's too short to spend it cleaning. Let us handle the mess, so you can enjoy what matters most.
        At Aimer, we offer professional, reliable, and affordable services tailored to your needs - because your time is spent living not scrubbing </p>
        <div className='checkus'>
          <div className='book'>
            <div onClick={handleContactNavigate} className='cta2'>Book A Service <MdOutlineNorthEast className='northeast' /></div>
          </div>
          
          <a href="tel:+14313345256" className='wos'>
            <FaPhoneAlt className='play'/>
            <p>+1 (431) 334-5256</p>
          </a>
        </div>
        <div className='details'>
          <span>
            <h3>760+</h3>
            <p>Total Customer</p>
          </span>
          <span>
            <h3>10+</h3>
            <p>Years Experience</p>
          </span>
          <span>
            <h3>328+</h3>
            <p>Team Members</p>
          </span>
        </div>
      </div>
      <img src='./images/cleaningservice-cuate.png' className='content-img' alt='img'/>
     </div>
    </div>
  )
}

export default Header
