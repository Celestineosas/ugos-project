import React from 'react'

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className='padding bg-black  w-full max-container'>
      <div className="flex gap-20 max-lg:gap-10 lg:flex-row flex-col items-start">
        <div className='flex items-start justify-between gap-10 flex-1 w-full'>
          <div className='flex flex-col gap-7'>
            <h2 className="font-palanquin text-3xl text-[#137335] font-bold">Aimer Cleaning</h2>
            <p className="font-palanquin text-gray-500 mt-3 md:max-w-md" >Premium cleaning services tailored to your needs, ensuring a spotless, fresh, and inviting space every time. Quality guaranteed.</p>

            <div className="flex flex-1 gap-5 mt-5">
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
            <div className="mt-10">
            <p className=" text-sm font-palanquin leading-normal text-gray-500 lg:max-w-lg">
             We are also a proud member of the Winnipeg Chamber of Commerce — supporting local business and community growth.
            </p>
              <img src="./images/binders.jpeg" alt="banner" className="w-[300px] mt-5" />
            </div>
          </div>
          <div className='flex flex-col gap-5 items-start'>
            <h2 className="font-palanquin text-white text-2xl font-bold">Company</h2>
            <ul className="flex flex-col justify-center items-center text-gray-500 gap-5">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Contact" >Contact</Link></li>
              <li><Link to="/FAQ" >FAQ+</Link></li>
              <li><Link to="/Review" >Reviews</Link></li>
            </ul>
            
          </div>
        </div>
        <div className='flex justify-between items-start w-full gap-10 flex-1 mt-6'>
          <div className='flex flex-col gap-5'>
            <h2 className="font-montserrat text-white text-xl whitespace-nowrap font-bold">Our Services</h2>
            <ul className="flex flex-col text-gray-500 gap-5">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Post Construction</li>
              {/* <li>Floor Cleaning</li> */}
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className="font-montserrat text-white text-xl whitespace-nowrap font-bold">Our Client</h2>
            <img src="/images/IMG-20251019-WA0003.jpg" alt="NorthTowne" className='w-[120px] sm:w-[150px] md:w-[180px] object-contain shadow-sm mx-0 md:mx-auto'/>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className="font-montserrat text-white text-xl font-bold whitespace-nowrap">Contact us</h2>
            <ul className="flex flex-col text-gray-500 gap-5">
              <li> <a href="tel:+14313345256">+1 (431) 334-5256</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex border-t border-gray-400 items-start justify-between gap-10 flex-1 w-full mt-10'>
        <p className="text-sm text-gray-500 pt-5">All Rights Reserved @2025 </p>
        <p className="text-sm text-gray-500 pt-5">
          <a href="https://www.x.com/anontextm">Website by AnonDev</a></p>
      </div>
    </section>

  )
}

export default Footer
