import React, { useEffect, useState } from 'react'
import './style.css'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineNorthEast } from "react-icons/md";
import data from './data';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  function handleContactNavigate(){
    navigate('/Contact')
  }
  const [scrolling, setScrolling] = useState(false);

  const [selection, setSelection] = useState(null);
  function handleAddSelection(currentId) {
    setSelection(selection === currentId ?
      null : currentId
    )
  }

  const dataElement = data.map(dataItem =>
    <div className='selection-content'>
      <h3 className={`${selection === dataItem.id ? 'selection-text' : 'selection-text1'}`} key={dataItem.id}>{dataItem.question} </h3>
      {
        selection === dataItem.id ?
          <FaTimes onClick={() => handleAddSelection(dataItem.id)} className='cta-btn' /> :
          <FaPlus onClick={() => handleAddSelection(dataItem.id)} className='cta-btn' />
      }
      {selection === dataItem.id ?
        <p>{dataItem.answer}</p> :
        null
      }
    </div>

  )

  const handleScrell = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrell)
    return () => {
      window.removeEventListener("scroll", handleScrell)
    }
  },
    [])
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className={`layer ${scrolling ? "show-left-scroll" : ""}`}>
          <button className='about-cta'>About Us</button>
          <h1>We Are Providing The Best<br></br> Cleaning Services</h1>
          <p>Welcome to AIMER CLEANING SERVICES, where cleanliness meets passion! We are a family-owned cleaning company founded by two individuals who have a genuine love for cleaning. Our passion for making spaces shine is what led us to create this company, and it’s at the heart of everything we do.
           <br></br>
            At AIMER CLEANING SERVICES, we believe that a clean environment not only looks good but also promotes well-being and productivity. Whether it’s your home, office, or company space, we are dedicated to delivering top-notch cleaning services that leave every corner sparkling.</p>
        </div>
        <div className={`about-description ${scrolling ? "show-left-scroll" : ""}`}>
          <p>Discover premium cleaning services tailored to your needs, efficient, reliable, and designed to keep your space immaculate and refreshing.</p>
          <div className='selection'>
            {dataElement}
            <div onClick={handleContactNavigate} className='about-cta2'>Contact us <MdOutlineNorthEast className='northeast' /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
