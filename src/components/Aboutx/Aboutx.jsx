import React from 'react'
import './style.css'
import { GiVibratingSmartphone } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { GiRingingBell } from "react-icons/gi";

import AboutSlider from './AboutSlider'

const Aboutx = () => {
  return (
    <div className='aboutx-container'>
      <div className='aboutx-content'>
        <div className='aboutx-description'>
          <h1>About Us</h1>
          <p>Welcome to AIMER CLEANING SERVICES, where cleanliness meets passion! We are a family-owned cleaning company founded by two individuals who have a genuine love for cleaning. Our passion for making spaces shine is what led us to create this company, and it’s at the heart of everything we do.
            At AIMER CLEANING SERVICES, we believe that a clean environment not only looks good but also promotes well-being and productivity. Whether it’s your home, office, or company space, we are dedicated to delivering top-notch cleaning services that leave every corner sparkling.</p>
        </div>
        <div className='aboutx-span'>
          <div className='aboutx-card'>
          <GiVibratingSmartphone className='logo-con' />
            <div className='aboutx-con'>
              <h3>Research-Driven Cleaning</h3>
              <p>Through careful analysis and data-driven insights, we craft personalized cleaning solutions tailored to your space, ensuring efficient, effective, and scientifically supported results that exceed expectations every time.</p>
            </div>
            
          </div>
          <div className='aboutx-card'>
          <CiSettings  className='logo-con'/>
            <div className='aboutx-con'>
              <h3> Strategic Cleaning Plans</h3>
              <p>Our strategic approach combines optimized schedules, advanced cleaning techniques, and meticulous attention to detail, delivering consistent, high-quality service that aligns perfectly with your unique needs and goals.</p>
            </div>
            
          </div>
          <div className='aboutx-card'>
            <GiRingingBell className='logo-con' />
            <div className='aboutx-con'>

                <h3> Design-Focused Cleaning</h3>
                <p> We clean with a design-first mindset, ensuring your space’s aesthetics are preserved while maintaining a spotless, fresh, and welcoming environment that reflects your style and enhances your comfort.</p>
              
            </div>
        
          </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutx
