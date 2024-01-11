import React from "react";
import Logo from '../../assets/logo01.png'
import './GetInTouch.css'
import {Link} from 'react-router-dom';
export default function GetInTouch() {
  return (
    <>
        <div className="getintouch">   
              
            <div id="getintouch" className="container d-flex justify-content-between align-items-center">
            <a href="#" className="logo111">
                    <img src={Logo} alt="achraf_logo" />
                </a>
                <div className="all_links d-flex">
                    <div>
                        <ul className="web_links">
                            <h1>Links</h1>
                            <li><Link to="/" id='link'>Home</Link></li>
                            <li><Link to="/AboutMe" id='link'>About Me</Link></li>
                            <li><Link to="/Services" id='link'>Services</Link></li>
                            <li><Link to="/Skills" id='link'>Skills</Link></li>
                            <li><Link to="/Contact" id='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div >
                        <ul className="Soft_skills">
                            <h1>Soft Skills</h1>
                            <li>Team spirit</li>
                            <li>Motivation</li>
                            <li>Problem solving</li>
                            <li>HardWorking</li>
                            <li>Communicative</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="social">
                            <h1>Social</h1>
                            <li><a href="https://github.com/AchrafMR">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/achraf-mechhour-6825a2289">Linkedin</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
