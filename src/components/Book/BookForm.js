import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './book.css';

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
            emailjs
                .sendForm('service_y4zxynk', 'template_0mktefc', form.current, {
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
            <h2>Book Now</h2>
            {message && <p>{message}</p>}
            {errors.firstName && <p className='error'>{errors.firstName}</p>}
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.lastName && <p className='error'>{errors.lastName}</p>}
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            {errors.email && <p className='error'>{errors.email}</p>}
            <div>
                <label htmlFor='email'>Email:</label>
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
                <label htmlFor='serviceType'>Type of Service:</label>
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
                </select>
            </div>
            {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
            <div>
                <label htmlFor='phoneNumber'>Phone Number:</label>
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
                <label htmlFor='postalCode'>Postal Code (Canada only):</label>
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
                <label htmlFor='details'>Additional Details:</label>
                <textarea
                    id='details'
                    name='details'
                    value={formData.details}
                    onChange={handleChange}
                    placeholder='Provide more details about your schedule...'
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default BookForm;