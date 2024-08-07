import React from 'react'
import About_img from '../../assets/about00.png'
import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles'
import { BiSolidRightArrow } from "react-icons/bi";

import './About.css'

function About() {
    const styles = {
        about : {
          width: '100%',
          height: '100vh',
        },
    };
    
    return (
    <>
        <div id="about" style={styles.about} className='container'>
            <Titles title='about me' />
            <div id='about_container'>
              <div className="img">
                <img src={About_img} className="img-fluid" alt="coding..." />
              </div>
              <div className="about_me">
                <h1>
                  Hello, <span style={{color:'var(--main-color)'}}>I'm</span> A Full-stack Web developer
                </h1>
                <p className='about_text_desc'>My name is MECHHOUR ACHRAF , and I am a highly skilled Web full-stack developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features. I am adept at setting up efficient databases to ensure smooth data management. As a dedicated and hardworking team player, I consistently deliver outstanding results. I am passionate about staying updated on the latest technologies and industry best practices.</p>
                <div className="about_information" width="100%">
                  <div className="infos_01">
                    <p><span>Age : </span> 21</p>
                    <p><span>Gender : </span> Male</p>
                    <p><span>Language : </span> french, English, Arabic </p>
                    <p><span>Work : </span> Full stack Web developer</p>
                  </div>
                  <div className="infos_02">
                    <p><span>Phone : </span> +212-615363002 </p>
                    <p><span>Email : </span> achrafmechhour01@gmail.com</p>
                    <p><span>Country : </span> Morocco</p>

                  </div>
                </div>
                <div className="btn">
                  <Button title="More information" link="/AboutMe" icon={<BiSolidRightArrow />} />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default About