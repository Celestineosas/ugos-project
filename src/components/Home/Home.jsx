import React from 'react'
import About from './About/About';
import Header from './Header/Header';
import Service from './Service/Service';
import Cleaning from './Cleaning/Cleaning';
import Blog from './Blog/Blog';
import './style.css'
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Cleaning />
      <Blog />
    </>
  )
}

export default Home
