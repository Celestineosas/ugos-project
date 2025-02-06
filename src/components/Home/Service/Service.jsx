import {React, useState, useEffect} from 'react'
import './service.css'
import { MdOutlineNorthEast } from "react-icons/md";
import { FaAward, FaShieldVirus  } from "react-icons/fa";

const Service = () => {
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias consectetur ex laboriosam possimus sed earum at fugiat ipsam quo. Voluptatem!</p>
            <div className='service-cta'>Contact us <MdOutlineNorthEast className='northeast' /></div>
        </div>
        <div className={`service-layer ${scrolling ? "show-left-scroll" : ""}` }>
        <img className='service-layer-img' src='./images/cleaningservice-rafiki2.png' alt='layer-img'/>
        <div className='layer-content'>
        <div className='layerX'>
         <FaAward size='2.8rem' />
         <h3>Quality in our Property</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere.</p>
        </div>
        <div className='layerX'>
        <FaShieldVirus size='2.8rem' color='green'/>
        <h3>Compliment in safety</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Service
