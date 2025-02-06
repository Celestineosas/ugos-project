import React, { useRef } from 'react'
import './style.css'
import { IoIosPlayCircle } from "react-icons/io";
import { MdOutlineNorthEast } from "react-icons/md";
// import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
     <div className='content'>
      <div className='description'>
        <h1 className='text'><span>Professional</span> Cleaning <br></br>Service For your home</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam vel recusandae mollitia dolorem, minima tenetur rerum dignissimos! Excepturi velit praesentium consequuntur rem nobis sint.</p>
        <div className='checkus'>
          <div className='book'>
            <div className='cta2'>Book A Service <MdOutlineNorthEast className='northeast' /></div>
          </div>
          
          <span className='wos'>
            <IoIosPlayCircle className='play'/>
            <p>Watch our service</p>
          </span>
        </div>
        <div className='details'>
          <span>
            <h3>2760+</h3>
            <p>Total Customer</p>
          </span>
          <span>
            <h3>25+</h3>
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
