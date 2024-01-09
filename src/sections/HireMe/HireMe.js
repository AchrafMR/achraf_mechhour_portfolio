import React from 'react'
import './HireMe.css'
import Titles from '../../components/Titles/Titles'
import { DataMe } from './DataMe'

const HireMe = () => {
  return (
    <div className='morespace'>
        <Titles title='Why Hire Me ?' />
        <div id="hire" className='container-md mt-5 d-flex justify-content-center align-items-center'>
            {DataMe.map((item)=>{
                return(
                    <div className="hire_card card text-light" key={item.id}>
                        <div className="hire_top card-top">
                            <img src={item.hire_image} className='img-fluid' alt="hire me image" />
                        </div>
                        <div className="hire_body card-body">
                            <div className="hire_title card-title">
                                <h1>{item.hire_title}</h1>
                            </div>
                            <p>{item.hire_desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default HireMe