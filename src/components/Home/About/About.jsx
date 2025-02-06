import React, { useEffect, useState } from 'react'
import './style.css'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineNorthEast } from "react-icons/md";
import data from './data';
import { FaTimes } from 'react-icons/fa';

const About = () => {
const [scrolling, setScrolling] = useState(false);

const [selection, setSelection] = useState(null);
function handleAddSelection(currentId){
  setSelection( selection === currentId ?
    null : currentId
  )
}

const dataElement = data.map(dataItem => 
  <div className='selection-content'>
    <h3 className={`${ selection === dataItem.id ? 'selection-text' : 'selection-text1'}`} key={dataItem.id}>{dataItem.question} </h3>
    {
      selection === dataItem.id?
      <FaTimes onClick={() => handleAddSelection(dataItem.id)} className='cta-btn'/> :
      <FaPlus onClick={() =>handleAddSelection(dataItem.id)} className='cta-btn' />
    }
        {selection === dataItem.id ?
        <p>{dataItem.answer}</p> :
        null
        }
  </div>

)

const handleScrell = () =>{
  const scrollPosition = window.scrollY;
 if (scrollPosition > 100){
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
[])
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className={`layer ${scrolling ? "show-left-scroll" : ""}`}>
            <button className='about-cta'>About Us</button>
            <h1>We Are Providing The Best<br></br> Cleaning Services</h1>
            <img className='layer-img' src='./images/istockphoto-1358089804-612x612.jpg' alt='layer-img'/>
        </div>
        <div className={`about-description ${scrolling? "show-left-scroll" : ""}`}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi modi dignissimos alias ad sapiente quasi, aliquid veniam explicabo. Magnam, officiis?</p>
        <div className='selection'>
        {dataElement}
        <div className='about-cta2'>Contact us <MdOutlineNorthEast className='northeast' /> </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
