import React from 'react'
import './Skills.css'
import Titles from '../../components/Titles/Titles'
import { SkillsData } from './SkillsData'
// --------carousel--------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };
    return (
    <div id='skills' className='container-md'>
        <Titles title='My skills' />
        <div className="row mt">
            <div className="slider">
              <Slider {...settings}>
                  {SkillsData.map((item,index)=>{
                      return (
                        <div key={index} className="skill_card my-2">
                          <div className="circle_color_percentage" style={{ backgroundColor: item.skill_icon_color, border: `3px solid ${item.skill_icon_border}` }}>
                            <span style={{ color: item.skill_icon_border }}></span>
                          </div>
                          <div className="skill_icon">{item.skill_icon}</div>
                          <h1 className='skill_name'>{item.skill_name}</h1>
                          <p className='skill_desc'>{item.skill_desc}</p>
                        </div>
                      );
                  })}
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default Skills