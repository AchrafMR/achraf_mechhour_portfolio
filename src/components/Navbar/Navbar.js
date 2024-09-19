import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import $ from 'jquery';
import Logo from '../../assets/logo01.png';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Navbar.css';
import { FaEnvelope } from 'react-icons/fa6';

function Navbar() {
  const location = useLocation(); // Hook to get the current route
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    $('#navTrigger').on('click', () => {
      $('#navTrigger').toggleClass('active');
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
    return () => {
      $('#navTrigger').off('click');
    };
  }, []);

  // Update activeLink state when the route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="nav affix">
        <div className="top_navbar">
          <div className="d-flex justify-content-between align-items-center" id='mix_top_nav'>
            <div className="email">
              <span className="envelope"><FaEnvelope /></span>
              <span className='email_span'> achrafmchhr@gmail.com</span>
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
              <li><NavLink to="/" id='nav_link' className={activeLink === '/' ? 'active-link' : ''}>Home</NavLink></li>
              <li><NavLink to="/AboutMe" id='nav_link' className={activeLink === '/AboutMe' ? 'active-link' : ''}>About Me</NavLink></li>
              <li><NavLink to="/Services" id='nav_link' className={activeLink === '/Services' ? 'active-link' : ''}>Services</NavLink></li>
              <li><NavLink to="/Skills" id='nav_link' className={activeLink === '/Skills' ? 'active-link' : ''}>Skills</NavLink></li>
              <li><NavLink to="/Projects" id='nav_link' className={activeLink === '/Projects' ? 'active-link' : ''}>Projects</NavLink></li>
              <li><NavLink to="/Contact" id='nav_link' className={activeLink === '/Contact' ? 'active-link' : ''}>Contact</NavLink></li>
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

export default Navbar;
