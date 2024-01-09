import React from 'react'
import './Services.css'
import {FaCode,FaFileCode,FaMobileScreenButton} from 'react-icons/fa6'
import {MdWeb} from 'react-icons/md'
import Service_img from '../../assets/service_img.png'
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages'
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage'

const Services = () => {
  return (
    <>
        <FirstSectionOfPages title="My Services" logo={Service_img} />
        <div className='container-md' id='services_id'>
            <section className="service" id="service">    

                <div className="box_se-container">

                    <div className="box_se">
                        <div className="icon"><MdWeb /></div>
                        <h3>Web Design</h3>
                        <p>An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this. </p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaCode /></div>
                        <h3>Web Development </h3>
                        <p>If you are looking for a developer who’ll take over the research and development of your website, I am a well-established professional to help you with this. </p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaMobileScreenButton /></div>
                        <h3>Responsive Design</h3>
                        <p>responsive design is a way to put together a website so that it automatically scales its content and elements to match the screen size on which it is viewed.</p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaFileCode /></div>
                        <h3>Logo & Graphic Design </h3>
                        <p>It’s a good practise to get your logos, images and website done from one source. I can help you design those that will fit and match into the website and app quickly. </p>
                    </div>
                </div>
            </section>
        </div>
        <MoveToNextPage move_title="Skills" move_link="/Skills" />
    </>
  )
}

export default Services