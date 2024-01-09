import React from 'react'
import './AboutMe.css'
import MyEducation from './MyEducation/MyEducation'

import MyExperience from './MyExperience/MyExperience'
import AboutMe_img from '../../assets/about_img.png'
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages'
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage'


export default function AboutMe() {
  return (
    <>
      <FirstSectionOfPages title="About Me" logo={AboutMe_img} />
      
      <div className="container">
        <MyEducation />
        <div className="my-5">
          <MyExperience />
        </div>
      </div>
      <MoveToNextPage move_title="Services" move_link="/Services" />
    </>
  );
}
