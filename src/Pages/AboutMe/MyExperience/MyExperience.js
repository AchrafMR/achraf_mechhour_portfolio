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
                    <span className='span'><FaCalendar /> 2023 </span>
                    <h3>INTERNSHIP</h3>
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