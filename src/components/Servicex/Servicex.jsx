import React from 'react'
import './style.css'
import ImgSlider from './ImgSlider'
// import { CiClock1 } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom';
// import { LuCircleDollarSign } from "react-icons/lu";
// import { FaArrowsRotate } from "react-icons/fa6";


const Servicex = () => {
    
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
                    {/* <span>Basic Cleaning (per hour) --  $30-$40</span>
                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                    <span>Monthly Packages --  $300-$800</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div> */}
                    <ul>
                      <li>Vacuum Floors</li>
                      <li>Wiping / Dusting Desks / Tables, Screens, Printers</li>
                      <li>Thorough Washroom Cleaning</li>
                      <li>Mop / Wash Floors</li>
                    </ul>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-2161323689-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>RESIDENTIAL/Air bnb CLEANING</h2>
                <div className='bottom-span'>
                    {/* <span>General Cleaning (per hour) --  $30-$40</span>
                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                    <span>Window Cleaning (per hour) --  $30-$45</span>
                    <span>Full Service(Monthly)  --  $500-$1000</span>
                    <span>Full Service(BiWeekly)  --  $260-$360</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div> */}
                    <ul>
                      <li>Vacuum Floors</li>
                      <li>Oven And Microwave</li>
                      <li>Thorough Bathroom Cleaning</li>
                      <li>Refrigerator Cleaning</li>
                      <li>Upholestry</li>
                      <li>Spot Clean Walls and Doors</li>
                      <li>Junk / Garbage Remove</li>
                      <li>Kitchen Cleaning</li>
                      <li>Wiping/ Dusting Cupboards And Baseboard From Exterior And Interior</li>
                      <li>Interior Windows</li>
                      <li>Carpet Shampooing</li>
                      <li>Garage / Patio Sweeping </li>
                    </ul>
                </div>
            </div>  
            </div>
            
            <div className='bottom-grid'>
            <img src=''/>
            <div className='bottom-text'>
                <h2>COMMERCIAL CLEANING</h2>
                <div className='bottom-span'>
                    <ul>
                      <li>Vacuum Floors</li>
                      <li>Window Cleaning</li>
                      <li>Dusting / Wiping surfaces</li>
                      <li>Sweep / Mop Floors</li>
                      <li>Washroom Cleaning</li>
                    </ul>
                </div>
            </div>  
            </div>

            <div className='bottom-grid'>
            <img src='./images/istockphoto-1408477638-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>POST CONSTRUCTION</h2>
                <div className='bottom-span'> 
                {/* <span>Basic Cleaning (per hour) --  $40-$60</span>
                    <span>Deep Cleaning (per hour) --  $60-$90</span>
                    <span>Window Cleaning (per hour) --  $30-$40</span>
                    <span>Full Service Package  --  $300-$500</span>
                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div> */}
                    <ul>
                      <li>Debris Removed</li>
                      <li>Window Washing</li>
                      <li>Surface Cleaning</li>
                      <li>Floor Cleaning</li>
                    </ul>
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
