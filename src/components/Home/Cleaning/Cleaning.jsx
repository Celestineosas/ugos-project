import {React, useState, useEffect} from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import { MdCleanHands } from "react-icons/md";
import { GiKitchenTap } from "react-icons/gi";
import { GiFloorPolisher } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const Cleaning = () => {
  const [scrolling, setScrolling] = useState(false);

  const navigate = useNavigate()
  function handleServiceNavigation(){
    navigate("Service")
  }
  const handleScrell = () =>{
    const scrollPosition = window.scrollY;
   if (scrollPosition > 2000){
    setScrolling(true);
   }else{
    setScrolling(false);
   }
  };
  
  useEffect(()=>{
  window.addEventListener("scroll", handleScrell)
  return() =>{
    window.removeEventListener("scroll", handleScrell)
  }
  },
  []);
  

  return (
    <div className='cleaning-container'>
    <div className='cleaning-content'>
    <div className='cleaning-description'>
    <h3>Services</h3>
    <h1>Our Best Cleaning Services</h1>
    </div>
    <div className={`cleaning-layer ${scrolling ? "show-left-scroll" : ""}`}>
    <div className='card'>
    <div className='card-list'>
    <MdCleanHands  className='size' color='blue'/>
    <h2>House Cleaning</h2>
    <p>Transform your home with thorough, reliable cleaning for a fresh and spotless living space.</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiKitchenTap  className='size' color='green'/>
    <h2>Air BnB Cleaning</h2>
    <p>Deep cleaning services to ensure a hygienic, sparkling, and perfectly organized kitchen area.</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiFloorPolisher className='size' color='yellow'/>
    <h2>Post Construction</h2>
    <p>Restore the shine and cleanliness of your floors with expert care and attention.</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <FaToilet className='size' color='orange'/>
    <h2>Commercial Cleaning</h2>
    <p>Professional sanitization for a clean, fresh, and germ-free bathroom every single time.</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiOfficeChair className='size' color='purple'/>
    <h2>Office Cleaning</h2>
    <p>Boost productivity with professional office cleaning for a tidy and welcoming workspace environment.</p>
    </div> 
    </div>
    <div className='card black'>
    <div className='card-list'>
    <h4 className='black-text'> Other <span>Services<br></br>You can Explore</span></h4>
    <FaArrowRight onClick={handleServiceNavigation} size='1.8rem' />
    </div> 
    </div>

    </div>
    </div>
      
    </div>
  )
}

export default Cleaning
