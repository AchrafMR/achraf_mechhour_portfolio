import React, {useState,useEffect} from 'react'
import { Element, scroller } from 'react-scroll';
import './ScrollLineBar.css'

const ScrollLineBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = (scrollY / scrollHeight) * 100;
        setScrollPercentage(percentage);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScrollTo = () => {
      scroller.scrollTo('content', {
        duration: 800,
        smooth: 'easeInOutQuad',
      });
    };
  
    return (
        <div className="progress">
            <div className="scroll-line-bar">
                <div
                className="progress-bar"
                style={{ width: `${scrollPercentage}%` }}
                ></div>
                <Element name="content">
                <div className="scroll-content">
                    {/* Content */}
                </div>
                </Element>
            </div>  
        </div>
    )
}

export default ScrollLineBar