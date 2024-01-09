import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./MoveToNextPage.css";

export default function MoveToNextPage(props) {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="move_to_next_page">
      <div className="container d-flex justify-content-around align-items-center">
        <h1 className="move_heading">{props.move_title}</h1>
        <Link to={props.move_link}  >
          <div className="arrow_icon">
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
}
