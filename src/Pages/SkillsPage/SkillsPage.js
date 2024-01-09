import React from "react";
import './SkillsPage.css'
import Skills_img from '../../assets/skills_img.png'
import FirstSectionOfPages from "../../components/FirstSectionOfPages/FirstSectionOfPages";
import MoveToNextPage from "../../sections/MoveToNextPage/MoveToNextPage";
import HireMe from "../../sections/HireMe/HireMe"
import Skills from "../../sections/Skills/Skills";
import Titles from "../../components/Titles/Titles";
import QR_code from "../../assets/qr_code.png"
import { FaCloud, FaFileLines, FaGear, FaGit, FaGithub } from "react-icons/fa6";
import {MdWeb} from 'react-icons/md'

export default function SkillsPage() {
  return (
    <>
        <FirstSectionOfPages title="My Skills" logo={Skills_img} />
        <div className="container">
            <div className="skills_section">
              <Skills />
            </div>
            <div className="additional_skills">
              <Titles title="Additional Skills" />
              <div className="additional_box_container">
                <div class="additional_box">
                    <div className="icon"><FaGit /></div>
                    <h3>Git / Github</h3>
                    <p>Git is a distributed version control system that enables tracking changes and collaboration in software development, while GitHub is a web-based platform that hosts Git repositories and provides a user-friendly interface for managing and collaborating on code.</p>
                </div>
                <div class="additional_box">
                    <div className="icon"><FaGear /></div>
                    <h3>Restful api</h3>
                    <p>A RESTful API is an architectural style for designing networked applications, particularly web services. It adheres to a set of constraints that emphasize the use of standard HTTP methods, such as GET, POST, PUT, DELETE, and PATCH.</p>
                </div>
                <div class="additional_box">
                    <div className="icon"><FaCloud /></div>
                    <h3>Cloud Computing (Azure)</h3>
                    <p>Cloud Computing (Azure) refers to a comprehensive suite of cloud services and infrastructure solutions provided by Microsoft's Azure platform. Azure allows organizations to deploy, manage, and scale a wide range of applications and services in the cloud,</p>
                </div>
                <div class="additional_box">
                    <div className="icon"><FaFileLines /></div>
                    <h3>Agile / Scrum</h3>
                    <p>Agile is a flexible and iterative approach to project management and software development, emphasizing collaboration, customer feedback, and the ability to respond to changing requirements. Scrum is a specific Agile framework characterized by small, cross-functional teams that work in short, time-boxed cycles called "sprints."</p>
                </div>
                <div class="additional_box">
                    <div className="icon"><MdWeb /></div>
                    <h3>Figma / Canva</h3>
                    <p>Figma and Canva are popular design tools</p>
                </div>
              </div>
            </div>
            <div className="soft_skills">
              <HireMe />
            </div>
            <div className="certification_section">
              <Titles title="Certificates" />
              <div className="certif_box d-flex justify-content-center align-items-center">
                <div className="qr_code_certife">
                  <img src={QR_code} alt="qr_code_Certificate" />
                </div>
                <div>
                  <ul>
                    <li>Office Word 2016 Expert</li>
                    <li>Office Excel® 2016 Expert</li>
                    <li>Office PowerPoint® 2016</li>
                    <li>Office Access 2016</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <MoveToNextPage move_title="Projects" move_link="/Projects" />
    </>
  );
}
