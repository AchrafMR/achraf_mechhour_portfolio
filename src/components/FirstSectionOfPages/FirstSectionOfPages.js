import React from "react";
// import Titles from '../../components/Titles/Titles'
import './FirstSectionOfPages.css'

export default function FirstSectionOfPages(props) {
    return (
        <div className="section container-fluid w-100">
            <div className="section_box d-flex justify-content-between align-items-center">
            
                <h1 className="sections_title">{props.title}</h1>
                <div className="img_box">
                    <img src={props.logo} className="sec_img" alt="service image" />
                </div>
            </div>
        </div>
    );
}
