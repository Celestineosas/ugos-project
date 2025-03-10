import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
    const navigate = useNavigate();
    function handleContactNavigate(){
      navigate('/Book')
    }
    return (

        <div className='servicex-container'>
            <div className='servicex-bottom'>
                <div className='bottom-description'>
                    <h1 className='belong' >AFFORDABLE CLEANING SERVICE THAT FITS YOUR BUDGET</h1>
                    <p className='here'>We know that every home is unique, and so as your cleaning needs. That's why we don't believe in one-size-fits-all pricing. Instead, we provide custormized quotes based on your space size, cleaning requirements, and preferred service. </p>
                    <div className='bottom-card'>
                        <div className='bottom-grid'>
                            <img src='./images/istockphoto-1393767097-612x612.jpg' />
                            <div className='bottom-text'>
                                <h2>OFFICE CLEANING</h2>
                                <div className='bottom-span'>
                                    <span>Basic Cleaning (per hour) --  $30-$40</span>
                                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                                    <span>Monthly Packages --  $300-$800</span>
                                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-grid'>
                            <img src='./images/istockphoto-2161323689-612x612.jpg' />
                            <div className='bottom-text'>
                                <h2>COMMERCIAL/RESIDENTIAL CLEANING</h2>
                                <div className='bottom-span'>
                                    <span>General Cleaning (per hour) --  $30-$40</span>
                                    <span>Deep Cleaning (per hour) --  $50-$65</span>
                                    <span>Window Cleaning (per hour) --  $30-$45</span>
                                    <span>Full Service(Monthly)  --  $500-$1000</span>
                                    <span>Full Service(BiWeekly) --  $260-$360</span>
                                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-grid'>
                            <img src='./images/istockphoto-1408477638-612x612.jpg' />
                            <div className='bottom-text'>
                                <h2>POST CONSTRUCTION</h2>
                                <div className='bottom-span'>
                                    <span>Basic Cleaning (per hour) --  $40-$60</span>
                                    <span>Deep Cleaning (per hour) --  $60-$90</span>
                                    <span>Window Cleaning (per hour) --  $30-$40</span>
                                    <span>Full Service Package --  $300-$500</span>
                                    <div onClick={handleContactNavigate} className='about-cta2'>Book Now</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pricing;
