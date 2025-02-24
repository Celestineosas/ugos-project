import React, {useState} from "react";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import './faq.css';
import data from './data-faq';

const Faq = () => {
    const [selection, setSelection] = useState(null);

    const handleAddSelection = (currentId) => {
        setSelection(selection === currentId ? null : currentId)
    };


    const dataElement = data.map(dataItem =>
        <div className='selection-content'>
        <h3 className={`${selection === dataItem.id ? 'selection-text' : 'selection-text1'}`}key={dataItem.id}> {dataItem.question} </h3>
        {
            selection === dataItem.id ?
            <FaTimes onClick={() => handleAddSelection(dataItem.id)} className='cta-btn' /> :
            <FaPlus onClick={() => handleAddSelection(dataItem.id)} className='cta-btn' />
        }
        {selection === dataItem.id ? <p dangerouslySetInnerHTML={{ __html: dataItem.answer }}></p> : null}
        </div>
    )

    return (
        <div className='faq-container'>
         <div className='faq-content'>
            <h1>FAQ</h1>
            <p>Frequently Asked Questions about our cleaning services.</p>
            {dataElement}
         </div>
        </div>
    )
}

export default Faq