import React from 'react';

const Button = ({ label, backgroundColor, text, iconURL }) => {
  return (
    <button
      className={`flex justify-center cursor-pointer items-center whitespace-nowrap font-semibold rounded px-7 py-4 leading-none font-montserrat text-lg ${
        backgroundColor ? `${backgroundColor}` : "bg-[#4f6f1d]"
      } ${text ? `${text}` : "text-black"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="Arrow" className="ml-2 w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
