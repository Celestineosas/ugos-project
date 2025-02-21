import React from 'react'
import './styyle.css'
import { FiFacebook, FiTwitter} from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div id="contact" className='footer-container'>
      <div className='footer-content'>
        <div className='bottom-section'>
        <div className='footer-layer'>
        <div className='footerA'>
        <div className='logo'>
        <div className='title saint'>
        <h1>Aimer</h1>
        <p>Cleaning Services</p>
        </div>
        </div>
        <p className='premium'>Premium cleaning services tailored to your needs, ensuring a spotless, fresh, and inviting space every time. Quality guaranteed!.</p>
        <div className='footer-cta'>
        <FiFacebook />
        <SlSocialLinkedin />
        <FiTwitter />
        </div>
        </div>
        <div className='footerB'>
            <h3>Company</h3>
            <p>Home</p>
            <p>Contact</p>
            <p>FAQ+</p>
            <p>Services</p>
        </div>
        <div className='footerC'>
            <h3>Our Services</h3>
            <p>House Cleaning</p>
            <p>Kitchen Cleaning</p>
            <p>Floor Cleaning</p>
            <p>Bathroom Cleaning</p>
            <p>Office Cleaning</p>
        </div>
        <div className='footerD'>
        <h3>Contact Us</h3>
        <p>+1 (431) 334-5256</p>
        <p>aimercleaning@gmail.com</p>
        </div>
        </div>
        <div className='footer-last'>
        <h4>Aimer</h4>
        <span className='aimer'>
            <h4>+1 (431) 334-5256</h4>
            <h4>aimercleaning@gmail.com</h4>
        </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
