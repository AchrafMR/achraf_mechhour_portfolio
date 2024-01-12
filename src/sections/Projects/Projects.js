import React from 'react'
import Titles from '../../components/Titles/Titles'
import Button from '../../components/Button/Button';
import './Projects.css'
// react icon
import { FaEye } from "react-icons/fa6";
// import { MdOutlineClose } from "react-icons/md";
import { ProData } from './ProData';

const Projects = () => {
  return (
  
   
    <div id='projects' className='container-md mb-5 mt-5'>
      <Titles title='projects' />
      <div className="mt gap">
        {ProData.map((item)=>{
          return(
            <div key={item.id} className="projects_card card p-4 my-2">
              <div className="project_image card-image">
                <img src={item.project_image} className='img-fluid' alt="project_card_image" />
              </div>
              <div className="card-body">
                <div className="project_title">
                  <h1 className='card-title'>{item.project_title}</h1>
                </div>
                <div className="project_desc">
                  <p className="card-text d-flex justify-content-between">
                    <span style={{ fontSize: '15px', margin: '4px 0' }}>Keywords</span>
                    <span>{item.project_desc}</span>
                  </p>
                </div>
                
                    <div className="project_btn">
                    <Button title="More Details" icon={<FaEye />}  link={`/Projects/${item.id}`} />
                    </div>
               
              </div>
            </div>
          )
        })}
      </div> 
    </div>
  )
}

export default Projects