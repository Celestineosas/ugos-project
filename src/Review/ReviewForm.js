import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Review.css';
import { FaCircleCheck } from "react-icons/fa6";


const ReviewForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Invalid email';
    if (!formData.rating) tempErrors.rating = 'Rating is required';
    if (!formData.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);

      emailjs
        .sendForm('service_y4zxynk', 'template_0mktefc', form.current, {
          publicKey: 'n86KGuoT1hi5VG0r9',
        })
        .then(
          () => {
            setFormData({
              name: '',
              email: '',
              rating: '',
              message: '',
            });
            setMessage('Review Sent Successfully!');
          },
          (error) => {
            setMessage('Failed to send review. Please try again.');
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
    <div className="form-container">
      <form className='review-form' ref={form} onSubmit={handleSubmit}>
        <div className="firsthand">
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="name">Your Name</label>
          <input
            id="name"
            className="second-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="rating">Your Rating</label>
          <select
            id="rating"
            className="second-input"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

        <div>
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="second-input"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>


        <button type="submit" value="Send" className="fform-btn">
          Send Message
        </button>
      {message && (
          <div className="message-pop">
            <FaCircleCheck className="message-logo mt-" />
            <p>{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
 