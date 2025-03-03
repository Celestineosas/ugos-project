import React from 'react'
import './styyle.css'
import { FiFacebook} from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


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
         <a href='https://www.facebook.com/share/1A3piEU3uN/?mibextid=wwXIfr'>
         <FiFacebook />
        </a> 
        <a href='https://www.instagram.com/aimercleaning?igsh=ZGc2MTdnMWV0bG5p&utm_source=qr'>
        <FaInstagram />
        </a>
        <a href='https://www.tiktok.com/@aimercleaning?_t=ZM-8u7JiSVUf1a&_r=1'>
        <FaTiktok />
        </a>
        </div>
        </div>
        <div className='footerB'>
            <h3>Company</h3>
            <p><Link to="/" className="footer-link">Home</Link></p>
            <p><Link to="/Contact" className="footer-link">Contact</Link></p>
            <p><Link to="/FAQ" className="footer-link">FAQ+</Link></p>
            <p><Link to="/Pricing" className="footer-link">Pricing</Link></p>
        </div>
        <div className='footerC'>
            <h3>Our Services</h3>
            <p>House Cleaning</p>
            <p>Commercial/Residental Cleaning</p>
            <p>Floor Cleaning</p>
            <p>Post Construction</p>
            <p>Air BnB Cleaning</p>
        </div>
        <div className='footerD'>
        <h3>Contact Us</h3>
        <p><a href='tel:+14313345256' >+1 (431) 334-5256</a></p>
        <p><a href='mailto:aimercleaning@gmail.com'>aimercleaning@gmail.com</a></p>
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
