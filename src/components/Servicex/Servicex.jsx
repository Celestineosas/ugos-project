import React from 'react'


const Servicex = () => {
  return (
    <section className='padding flex justify-center items-center flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col mt-16'>

        <h2 className="xl:mt-10 mt-5 font-palanquin text-black text-4xl max-sm:text-3.5xl font-bold">
          OUR CLEANING SERVICES
        </h2>
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-3 gap-14'>
        {/* <div className='flex flex-1 flex-col w-full max-sm:w-full  '>
          <img className="w-full h-[250px] object-cover" src='./images/istockphoto-1393767097-612x612.jpg' alt='blog-img' />
          <h3 className="text-black font-montserrat mt-5 font-semibold text-xl">OFFICE CLEANING</h3>
          <ul className='mt-5 text-gray-500 list-disc ml-5'>
            <li>Vacuum / Sweep Floors</li>
            <li>Tables, Screens, Printers Cleaning</li>
            <li>Washroom cleaning and more</li>
          </ul>
        </div> */}
        <div className='flex flex-1 flex-col w-full max-sm:w-full  '>
          <img className="w-full h-[250px] object-cover" src='./images/istockphoto-2161323689-612x612.jpg' alt='blog-img' />
          <h3 className="text-black font-montserrat mt-5 font-semibold text-xl">RESIDENTIAL CLEANING</h3>
          <ul className='mt-5 text-gray-500 list-disc ml-5'>
            <li>Vacuum / Sweep Floors</li>
            <li>Oven And Microwave Cleaning</li>
            <li>Refrigerator Cleaning</li>
            <li>Upholestry</li>
            <li>Walls and Doors Cleaning</li>
            <li>Junk / Garbage Removal</li>
            <li>Cupboard / Baseboard Cleaning </li>
            <li>Interior window cleaning</li>
            <li>Carpet Shampoo and more</li>
          </ul>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full  '>
          <img className="w-full h-[250px] object-cover" src='./images/istockphoto-1316473356-612x612.jpg' alt='blog-img' />
          <h3 className="text-black font-montserrat mt-5 font-semibold text-xl">COMMERCIAL CLEANING</h3>
          <ul className='mt-5 text-gray-500 list-disc ml-5'>
            <li>Vacuum Floors</li>
            <li>Floor wash</li>
            <li>Surface Cleaning</li>
            <li>Refrigerator Cleaning</li>
            <li>Window cleaning and more</li>
          </ul>
        </div>
        <div className='flex flex-1 flex-col w-full max-sm:w-full  '>
          <img className="w-full h-[250px] object-cover" src='./images/istockphoto-1408477638-612x612.jpg' alt='blog-img' />
          <h3 className="text-black font-montserrat mt-5 font-semibold text-xl">POST CONSTRUCTION</h3>
          <ul className='mt-5 text-gray-500 list-disc ml-5'>
            <li>Debris Removal</li>
            <li>Window Washing</li>
            <li>Surface Cleaning</li>
            <li>Floor Cleaning</li>
            <li>Hallway Cleaning and more</li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Servicex
