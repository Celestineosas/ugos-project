import React from 'react'
import './style.css'
import ImgSlider from './ImgSlider'
import { CiClock1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";


const Servicex = () => {
    const navigate = useNavigate();
    function handleContactNavigate(){
      navigate('/Contact')
    }
  return (
    <div className='servicex-container'>
      <div className='servicex-content'>
        <div  className='servicex-top'>
        <div className='servicex-description'>
        <h1>OUR CLEANING<br></br> SERVICES</h1>
        </div>
        <ImgSlider />
        </div>
        <div  className='servicex-bottom'>
        <div className='bottom-description'>
        
        <div className='bottom-card'>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1393767097-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>OFFICE CLEANING</h2>
                <div className='bottom-span'> 
                    <span>Basic Cleaning (per hour) --  $30-$40</span>
                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                    <span>Monthly Packages (per hour) --  $300-$800</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-2161323689-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>COMMERCIAL/RESIDENTIAL CLEANING</h2>
                <div className='bottom-span'>
                    <span>General Cleaning (per hour) --  $30-$40</span>
                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                    <span>Window Cleaning (per hour) --  $30-$45</span>
                    <span>Full Service(Monthly) (per hour) --  $500-$1000</span>
                    <span>Full Service(BiWeekly) (per hour) --  $260-$360</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1408477638-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>POST CONSTRUCTION</h2>
                <div className='bottom-span'> 
                <span>Basic Cleaning (per hour) --  $40-$60</span>
                    <span>Deep Cleaning (per hour) --  $60-$90</span>
                    <span>Window Cleaning (per hour) --  $30-$40</span>
                    <span>Full Service Package (per hour) --  $300-$500</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                </div>
            </div>  
            </div>

        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Servicex
