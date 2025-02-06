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
    <h2>House Claening</h2>
    <p>Lorem ipsu dolor sit amet consectetur adipisicing elit. Esse atque dicta maxime cum, tempore ipsum?</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiKitchenTap  className='size' color='green'/>
    <h2>Kitchen Cleaning</h2>
    <p>Lorem ipsu dolor sit amet consectetur adipisicing elit. Esse atque dicta maxime cum, tempore ipsum?</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiFloorPolisher className='size' color='yellow'/>
    <h2>Floor Cleaning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque dicta maxime cum, tempore ipsum?</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <FaToilet className='size' color='orange'/>
    <h2>Bathroom Cleaning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque dicta maxime cum, tempore ipsum?</p>
    </div> 
    </div>
    <div className='card'>
    <div className='card-list'>
    <GiOfficeChair className='size' color='purple'/>
    <h2>House Cleaning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque dicta maxime cum, tempore ipsum?</p>
    </div> 
    </div>
    <div className='card black'>
    <div className='card-list'>
    <h4 className='black-text'>12+ <span>Services<br></br>You can Explore</span></h4>
    <FaArrowRight onClick={handleServiceNavigation} size='1.8rem' />
    </div> 
    </div>

    </div>
    </div>
      
    </div>
  )
}

export default Cleaning
