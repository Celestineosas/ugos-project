import {React, useState, useEffect} from 'react'
import './service.css'
import { MdOutlineNorthEast } from "react-icons/md";
import { FaAward, FaShieldVirus  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate();
  function handleContactNavigate(){
    navigate('/Contact')
  }
const [scrolling, setScrolling] = useState(false);

const handleScrell = () =>{
  const scrollPosition = window.scrollY;
 if (scrollPosition > 800){
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
    <div className='service-container'>
      <div className='service-content'>
        <div className={`service-description ${scrolling ? "show-left-scroll" : ""}`}>
            <h3>Check Us out</h3>
            <h1>We maintain healthy,<br></br> environments through<br></br>our services</h1>
            <p>Explore our range of professional cleaning services designed to meet your needs and exceed your expectations. Quality guaranteed!</p>
            <div onClick={handleContactNavigate} className='service-cta'>Contact us <MdOutlineNorthEast className='northeast' /></div>
        </div>
        <div className={`service-layer ${scrolling ? "show-left-scroll" : ""}` }>
        <img className='service-layer-img' src='./images/cleaningservice-rafiki2.png' alt='layer-img'/>
        <div className='layer-content'>
        <div className='layerX'>
         <FaAward size='2.8rem' />
         <h3>Our Mission in cleaning</h3>
         <p>To deliver exceptional cleaning services that enhance your space, ensuring comfort, cleanliness, and peace of mind.</p>
        </div>
        <div className='layerX'>
        <FaShieldVirus size='2.8rem' color='green'/>
        <h3>Our Vision in cleaning</h3>
         <p>To become the trusted leader in cleaning solutions, setting new standards for quality and customer satisfaction.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Service
