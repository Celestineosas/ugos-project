import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './book.css';
import { FaCircleCheck } from "react-icons/fa6";

const BookForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        serviceType: '',
        phoneNumber: '',
        postalCode: '',
        details: '',
    });
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.firstname) tempErrors.firstname = 'First name is required';
        if (!formData.lastname) tempErrors.lastname = 'Last name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Invalid email';
        if (!formData.serviceType) tempErrors.serviceType = 'Service type is required';
        if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone number is required';
        if (!formData.postalCode) tempErrors.postalCode = 'Postal code is required';
        else if (!/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(formData.postalCode)) tempErrors.postalCode = 'Postal code must be in the format A1A 1A1';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Data:', formData); // Debugging
            emailjs
                .sendForm('service_y4zxynk', 'template_9u2byg9', form.current, {
                    publicKey: 'n86KGuoT1hi5VG0r9',
                })
                .then(
                    () => {
                        setFormData({
                            firstname: '',
                            lastname: '',
                            email: '',
                            serviceType: '',
                            phoneNumber: '',
                            postalCode: '',
                            details: '',
                        });
                        setMessage('Booking request sent successfully!');
                    },
                    (error) => {
                        console.error('EmailJS Error:', error); // Debugging
                        setMessage('Failed to send booking request. Please try again.');
                    }
                )
                .finally(() => {
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                });
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className='book-form'>
            <h2 className='font-semibold font-montserrat text-lg'>Book Now</h2>
            {errors.firstname && <p className='error'>{errors.firstname}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='firstname'>First Name:</label>
                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.lastname && <p className='error'>{errors.lastname}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='lastname'>Last Name:</label>
                <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.email && <p className='error'>{errors.email}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.serviceType && <p className='error'>{errors.serviceType}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='serviceType'>Type of Service:</label>
                <select
                    id='serviceType'
                    name='serviceType'
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                > 
                    <option value=''>Select a service</option>
                    <option value='office-cleaning'>Office Cleaning</option>
                    <option value='residential-airbnb-cleaning'>Residential/Air bnb Cleaning</option>
                    <option value='post-construction'>Post Construction</option>
                    <option value='commercial-cleaning'>Commercial Cleaning</option>
                    <option value='others'>Others</option>
                </select>
            </div>
            {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='phoneNumber'>Phone Number:</label>
                <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.postalCode && <p className='error'>{errors.postalCode}</p>}
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='postalCode'>Postal Code (Canada only):</label>
                <input
                    type='text'
                    id='postalCode'
                    name='postalCode'
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder='A1A 1A1'
                    required
                />
            </div>
            <div>
                <label className="text-left font-bold text-xl font-palanquin" htmlFor='details'>Additional Details:</label>
                <textarea
                    id='details'
                    name='details'
                    value={formData.details}
                    onChange={handleChange}
                    placeholder='Provide more details about your schedule...'
                />
            </div>
            <button type="submit" value="Send" className="fform-btn">
          Send Message
        </button>
            {message && <div className='message-pop'> 
                <FaCircleCheck className='message-logo mt-3' />
                 <p>{message}</p>
            </div>}
        </form>
    );
};

export default BookForm;