import React from 'react'
import './style.css'
import ImgSlider from './ImgSlider'
import { CiClock1 } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";


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
        <h1 className='belong' >WE HAVE PERFORMED<br></br>OVER <span className='green-span'>5,792 CLEANINGS</span></h1>
        <div className='bottom-card'>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
                </div>
            </div>  
            </div>
            <div className='bottom-grid'>
            <img src='./images/istockphoto-1417833187-612x612.jpg'/>
            <div className='bottom-text'>
                <h2>Washing the facade of the house</h2>
                <div className='bottom-span'> 
                    <span><CiClock1 /> 8hours</span>
                    <span><LuCircleDollarSign /> $1,200</span>
                    <span><FaArrowsRotate /> 100m</span>
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
