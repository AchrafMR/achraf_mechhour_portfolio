import React from 'react'
// import Button from '../../../components/Button/Button'
import './MyExperience.css'
// react-icon
import {FaCalendar} from 'react-icons/fa6'

const MyExperience = () => {
  return (
    <div>
        <section className="container-md experience" id="experience">
        <h1 className="heading"> <span> my </span> experience : </h1>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> 2024 </span>
                    <h3>FULL STACK DEVELOPER(on-site)</h3>
                    <p>Started August 1 (2024) to today at Sheikh Zaid Foundation in morocco: <br />
                    <span className='mx-4'>- Development, creation, and maintenance of the foundation's applications. </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> 2024 </span>
                    <h3>INTERNSHIP(on-site)</h3>
                    <p>Started May 1 (2024) to 31 July at Sheikh Zaid Foundation in morocco: <br />
                    <span className='mx-4'>- Develop a web application to stock management and electronic commerce. </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> 2024 </span>
                    <h3>INTERNSHIP(Remote)</h3>
                    <p>1 month (February 2024) at YT CONSULTING in Belgium: <br />
                    <span className='mx-4'>- Develop a web application to manage invoices for the car dealership. </span></p>
                </div>
            </div>
        </div>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> 2023 </span>
                    <h3>INTERNSHIP(on-site)</h3>
                    <p>1 month (April 2023) at Oum Er Rbia Hydraulic Basin Agency in Beni Mellal: <br />
                    <span className='mx-4'>- Develop a web application for employee and leave management . </span></p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MyExperience