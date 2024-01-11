import React from 'react'
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import Coding from '../../assets/coding.png'
// import { saveAs } from 'file-saver';
import CV from '../../assets/Resume.pdf';
import './Hero.css'

function Hero() {
    return (
    <div className='test container-md'>
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
        <div id="Hero">
            <div className="hero_container">
                <div className="information">
                    <h1>
                        Hello, <span style={{color:'var(--main-color)'}}>I'm</span> <br /> MECHHOUR ACHRAF <br /> A Full stack Web developer
                    </h1>
                    <p> I am a highly skilled full-stack Web developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features.</p>
                    <div className="btn">
                        <div id='button'>
                            <a href={CV} download="cv" className="link">
                            <div className="button">
                                Download CV &nbsp;
                                <span className="shift"><FaDownload /></span>
                                <div className="mask"></div>
                            </div>
                            </a>
                        </div>
                    </div>
                    <SocialIcons />
                </div>
                <div className="Hero_image">
                    <img src={Coding} className="img-fluid" alt="Hero image" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero