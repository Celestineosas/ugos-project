import React from 'react'
import { useRef } from 'react';
import '../Home/Header/style.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const navigate = useNavigate()
      const navRef = useRef();
      function showNavbar (){
        navRef.current.classList.toggle("responsive_nav");
      }
      function handleServiceNavigate(){
        navigate('Service')
      }
      function handleAboutNavigate(){
        navigate('About')
      }
      function handleHomeNavigate(){
        navigate('/')
      }
  return (
          <nav>
            <div className='logo'>
          <div className='title'>
          <h1>waterllo</h1>
          <p>At your service</p>
          </div>
          </div>
          {/* <div className='nav-content'> */}
            <ul ref={navRef} className='nav-menu' onClick={showNavbar}>
            <a onClick={handleHomeNavigate}>
              <li className='nav-list'>Home</li>
            </a>
            <a onClick={handleAboutNavigate}>
              <li className='nav-list'>About Us</li>
            </a>
            <a onClick={handleServiceNavigate}>
              <li className='nav-list'>Services</li>
            </a>
            <a>
               <li className='nav-list'>Pricing</li>
            </a>
           <a href='#blog'>
            <li className='nav-list'>Blog</li>
           </a>
           <a href='contact'>
            <li className='nav-list'>Contact</li>
           </a>
            <div className='cta'>
           Free Consultation
          </div>
            <button className='nav-btn nav-close-btn'>
              <FaTimes />
            </button>
            </ul>
          
             <button className='nav-btn' onClick={showNavbar} >
              <FaBars />
            </button>
          </nav>
  )
}

export default Navbar
