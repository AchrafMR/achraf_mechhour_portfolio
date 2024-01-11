import React, {useState, useEffect} from 'react'
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo01.png'
// import Logo from '../../assets/Logo01.png'
import SocialIcons from '../SocialIcons/SocialIcons';
import './Navbar.css'
import { FaEnvelope } from 'react-icons/fa6';

function Navbar() {
    useEffect(() => {
        // Example: using jQuery to add a click event listener to a button
        $('#navTrigger').on('click', () => {
        //   alert('Button clicked!');
          $('#navTrigger').toggleClass('active');
          console.log("Clicked menu");
          $("#mainListDiv").toggleClass("show_list");
          $("#mainListDiv").fadeIn();
        });
        return () => {
          $('#navTrigger').off('click');
        };
    }, []);  

    const [activeLink, setActiveLink] = useState("/");

    const handleActiveLink = (navLink) => {
        setActiveLink(navLink);
    }
    return (
    <>
        <nav className="nav affix">
            <div className="top_navbar">
                <div className="d-flex justify-content-between align-items-center" id='mix_top_nav'>
                    <div className="email">
                        <span className="envelope"><FaEnvelope /></span>
                        <span className='email_span'> achrafmechhour01@gmail.com</span>
                    </div>
                    <div className="social_media">
                    <SocialIcons />
                    </div>
                </div>
            </div>
            <div className="con">
                <a href="#" className="logo">
                    <img src={Logo} alt="achraf_logo" />
                </a>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><NavLink to="/" id='nav_link' onClick={() => handleActiveLink('/')} className={activeLink === '/' ? 'active-link' : ''}>Home</NavLink></li>
                        <li><NavLink to="/AboutMe" id='nav_link' onClick={() => handleActiveLink('AboutMe')} className={activeLink === 'AboutMe' ? 'active-link' : ''}>About Me</NavLink></li>
                        <li><NavLink to="/Services" id='nav_link' onClick={() => handleActiveLink('Services')} className={activeLink === 'Services' ? 'active-link' : ''}>Services</NavLink></li>
                        <li><NavLink to="/Skills" id='nav_link' onClick={() => handleActiveLink('Skills')} className={activeLink === 'Skills' ? 'active-link' : ''} >Skills</NavLink></li>
                        <li><NavLink to="/Projects" id='nav_link' onClick={() => handleActiveLink('Projects')} className={activeLink === 'Projects' ? 'active-link' : ''}>Projects</NavLink></li>
                        <li><NavLink to="/Contact" id='nav_link' onClick={() => handleActiveLink('Contact')} className={activeLink === 'Contact' ? 'active-link' : ''}>Contact</NavLink></li>
                    </ul>
                </div>
                <span className="navTrigger" id='navTrigger'>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    </>
  );
}

export default Navbar