import React from 'react'
import './styyle.css'
import { FiFacebook, FiTwitter} from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div id="contact" className='footer-container'>
      <div className='footer-content'>
        <div className='top-section'>
        <div className='top-section-description'>
        <h2> 
            Subscribe Our NewsLetter
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse laudantium voluptate nobis? Ipsa sit et voluptas illo aperiam molestiae!</p>
        </div>
        <div className='footer-input'>
        <input type='text' placeholder='Enter Email'/>
        <button>Subscribe</button>
        </div>
        </div>
        <div className='bottom-section'>
        <div className='footer-layer'>
        <div className='footerA'>
        <div className='logo'>
        <div className='title'>
        <h1>waterllo</h1>
        <p>At your service</p>
        </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, suscipit aliquid consequatur dolore reiciendis deleniti.</p>
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
            <p>Lorem</p>
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
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        </div>
        </div>
        <div className='footer-last'>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <span>
            <h4>Lorem, ipsum.</h4>
            <h4>Lorem, ipsum.</h4>
        </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
