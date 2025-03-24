import React from 'react';
import './book.css';
import BookForm from './BookForm';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Book = () => {
    return (
        <section className='padding-x sm:py-36 py-24 flex justify-between items-center text-center gap-10 w-full max-container flex-col bg-[#b8d576]'>
            <div className='flex flex-1 flex-col'>
                <h2 className="xl:mt-10 mt-5 font-palanquin text-[#2e3d12] capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold">
                    Book Our Services
                    <p className=" mt-4 text-sm font-palanquin leading-normal text-white lg:max-w-lg">
                        Fill out the form below to book our professional cleaning services. We look forward to making your space spotless</p>
                </h2>
            </div>
            {/* // <section className='book-container'>
        //     <h1>Book Our Services</h1>
        //     <p>Fill out the form below to book our professional cleaning services. We look forward to making your space spotless!</p> */}
            <div className='book-content'>
                <div className='book-card mb-5' >
                    <span className='book-info'>
                        <h2>Contact Information</h2>
                        <p>If you have any questions or need further assistance, feel free to contact us!</p>
                    </span>
                    <span className='book-details'>
                        <FaPhoneAlt className='play' />
                        <a href="tel:+14313345256">+1 (431) 334-5256</a>
                    </span>
                    <span className='book-details'>
                        <MdEmail className='play' />
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
                <BookForm />
            </div>
        </section>
    );
}

export default Book;