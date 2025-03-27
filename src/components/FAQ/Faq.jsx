import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import data from './data-faq';

const Faq = () => {
    const [selection, setSelection] = useState(null);

    const handleAddSelection = (currentId) => {
        setSelection(selection === currentId ? null : currentId)
    };

  const dataElement = data.map(dataItem =>
    <div className='flex flex-col relative w-full sm:max-w-[350px] md:max-w-[600px] lg:max-w-[650px] shadow-[-3px_10px_34px_-10px_rgba(0,0,0,0.36)]' key={dataItem.id}>
      <h3 className={`${selection === dataItem.id ? 'bg-black text-white text-md font-bold font-montserrat flex p-[15px_20px] text-left' : 'bg-white shadow-[-8px_10px_5px_-7px_rgba(102,102,102,0.15)] text-black text-xl font-bold font-palanquin flex p-[15px_20px] mb-0 text-left max-sm:w-[300px]'}`} >{dataItem.question} </h3>
      {
        selection === dataItem.id ?
          <FaTimes onClick={() => handleAddSelection(dataItem.id)} className='text-white text-xs absolute right-[25px] top-[25px]' /> :
          <FaPlus onClick={() => handleAddSelection(dataItem.id)} className='text-gray-500 text-xs absolute right-[25px] top-[25px]' />
      }
      {selection === dataItem.id ?
        <p className="flex text-gray-500 text-left p-[10px_30px]" >{dataItem.answer}</p> :
        null
      }
    </div>

  )

    return (
        <section className='padding-x sm:py-36 py-24 flex justify-between items-center text-center gap-10 w-full max-container'>
            <div className='flex flex-1 items-center flex-col'>
                <h2 className="xl:mt-10 mt-5 font-palanquin text-center text-black capitalize lg:max-w-lg text-4xl max-sm:text-3.5xl font-bold">
                    FAQ
                    <p className=" mt-4 text-sm font-palanquin leading-normal text-gray-500 lg:max-w-lg">Frequently Asked Questions about our cleaning services</p>
                </h2>
                <div className='flex flex-col w-full flex-1 gap-5 mt-14 items-center'>{dataElement}</div>
            </div>
        </section>
    )
}

export default Faq
