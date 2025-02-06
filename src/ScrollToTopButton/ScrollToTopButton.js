import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import "./style.css"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const checkScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button className="scroll"
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none"
        // position: "fixed",
        // bottom: "20px",
        // right: "250px",
        // display: isVisible ? "block" : "none",
        // fontSize: "30px",
        // color: "#666666",
        // border: "none",
        // cursor: "pointer",
        // background: "transparent"
      }}
    >
      <FaRegArrowAltCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
