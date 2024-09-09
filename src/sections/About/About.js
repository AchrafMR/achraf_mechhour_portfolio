import React from 'react';
// import About_img from '../../assets/about00.png';
import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles';
import { BiSolidRightArrow } from "react-icons/bi";

import './About.css';

function About() {
    return (
        <>
            <div id="about" className='container'>
                <Titles title='about me' />
                <div id='about_container'>
                    {/* Code Snippet Section */}
                    <div className="code-container">
                        <div className="dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <pre>
                            <code>
                                <span className="code-highlight">const</span> personalInfo = {'{'}<br />
                                &nbsp;&nbsp;<span className="code-highlight-property">age</span>: <span className="code-highlight-number">21</span>,<br />
                                &nbsp;&nbsp;<span className="code-highlight-property">gender</span>: <span className="code-highlight-string">'Male'</span>,<br />
                                &nbsp;&nbsp;<span className="code-highlight-property">language</span>: [<span className="code-highlight-string">'French', 'English', 'Arabic'</span>],<br />
                                &nbsp;&nbsp;<span className="code-highlight-property">work</span>: <span className="code-highlight-string">'Full Stack Web Developer'</span>,<br />
                                &nbsp;&nbsp;<span className="code-highlight-property">contact</span>: {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-highlight-property">phone</span>: <span className="code-highlight-string">' +212-615363002'</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-highlight-property">email</span>: <span className="code-highlight-string">'achrafmchhr@gmail.com'</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-highlight-property">country</span>: <span className="code-highlight-string">'Morocco'</span><br />
                                &nbsp;&nbsp;{'}'}<br />
                                {'};'}
                            </code>
                        </pre>
                    </div>

                    {/* Description Section */}
                    <div className="about_me">
                        <h1>
                            Hello, <span style={{ color: 'var(--main-color)' }}>I'm</span> A Full-stack Web developer
                        </h1>
                        <p className='about_text_desc'>My name is MECHHOUR ACHRAF , and I am a highly skilled Web full-stack developer proficient in both front-end and back-end development. I have the ability to create dynamic and user-friendly web applications with exceptional features. I am adept at setting up efficient databases to ensure smooth data management. As a dedicated and hardworking team player, I consistently deliver outstanding results. I am passionate about staying updated on the latest technologies and industry best practices.</p>
                        <div className="btn">
                            <Button title="More information" link="/AboutMe" icon={<BiSolidRightArrow />} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
