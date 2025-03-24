import React from 'react'
import './contact.css'
import ContactForm from './ContactForm'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (

        <section className='padding-x sm:py-36 py-24 flex justify-between items-center text-center gap-10 w-full max-container flex-col bg-[#b8d576]'>
          <div className='flex flex-1 flex-col'>
            <h2 className="xl:mt-10 mt-5 font-palanquin text-[#2e3d12] capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold">
            Get In Touch
              <p className=" mt-4 text-sm font-palanquin leading-normal text-white lg:max-w-lg">
              We will respond promptly and provide you with professional cleaning services tailored to your needs. Let us make your space spotless and inviting!.</p>
            </h2>
          </div>
          
            <div className='contact-content'>
                
                <div className='contact-card'>
                    <span className='contact-info'>
                        <h2>Contact Information</h2>
                        <p>We will exceed your expectations with our professional cleaning services. Contact us!</p>
                    </span>
                    <span className='contact-details'>
                        <FaPhoneAlt className='play mt-1' />
                        <a href="tel:+14313345256">+1 (431) 334-5256</a>
                    </span>
                    <span className='contact-details'>
                    <MdEmail className='play mt-1'/>
                        <a href="mailto:aimercleaning@gmail.com">
                            <p>aimercleaning@gmail.com</p>
                        </a>
                    </span>
                             <div className="flex flex-1 gap-5">
                                <a className='text-white text-2xl' href='https://www.facebook.com/share/1A3piEU3uN/?mibextid=wwXIfr'>
                                  <FiFacebook />
                                </a>
                                <a className='text-white text-2xl' href='https://www.instagram.com/aimercleaning?igsh=ZGc2MTdnMWV0bG5p&utm_source=qr'>
                                  <FaInstagram />
                                </a>
                                <a className='text-white text-2xl' href='https://www.tiktok.com/@aimercleaning?_t=ZM-8u7JiSVUf1a&_r=1'>
                                  <FaTiktok />
                                </a>
                                <a className='text-white text-2xl' href='https://youtube.com/@aimercleaning?si=gWgBOoiNFb6WodA-'>
                                <FaYoutube />
                                </a>
                              </div>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
