import React from 'react'
import './style.css'
import AboutSlider from './AboutSlider'

const Aboutx = () => {
  return (
    <div className='aboutx-container'>
      <div className='aboutx-content'>
        <div className='aboutx-description'>
        <h1>Meet our dedicated team</h1>
        <p>Our Philosophy is simple: hire great people and give them the resources and support to do their best work.</p>
        <span className='aboutx-cta'>
          <div className='ctax1'>
            Book a session
          </div>
          <div className='ctax2'>
            Get in touch
          </div>
        </span>
        </div>
      </div>
      <AboutSlider />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, non natus fugiat ullam doloremque nam. lorem Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Aboutx
