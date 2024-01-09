import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'
// ract-icon
import {BiSolidUpArrow} from 'react-icons/bi'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Add a scroll event listener to detect when the user scrolls down the page
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleButtonClick = () => {
        // Scroll to the top of the page when the button is clicked
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Add smooth scrolling animation
        });
    };

    return (
    <div>
        <button
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={handleButtonClick}
        >
          <BiSolidUpArrow />
        </button>
    </div>
  )
}

export default ScrollToTop