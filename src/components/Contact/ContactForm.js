import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaCircleCheck } from "react-icons/fa6";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email";
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }

    emailjs
      .sendForm("service_y4zxynk", "template_0mktefc", form.current, {
        publicKey: "n86KGuoT1hi5VG0r9",
      })
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setMessage("Message Sent Successfully!");
        },
        (error) => {
          setMessage("Failed to send message. please try again ");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setMessage("");
        }, 5000);
      });
  };
  return (
    <div className="form-container">
      <form ref={form} onSubmit={handleSubmit}>
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
          {errors.name && <p className="error"></p>}
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br></br>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label className="text-left font-bold text-xl font-palanquin" htmlFor="subject">Your Subject</label>
          <input
            id="subject"
            className="second-input"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
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
            <FaCircleCheck className="message-logo mt-3" />
            <p>{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
