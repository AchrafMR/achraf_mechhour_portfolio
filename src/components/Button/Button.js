import React,{useEffect} from 'react'
import './Button.css'
// route link
import {Link} from 'react-router-dom'

function Button(props) {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div id='button'>
    <Link to={props.link} download={props.download} className="link">
      <div className="button">
        {props.title} &nbsp;
        <span className="shift">{props.icon}</span>
        <div className="mask"></div>
      </div>
    </Link>
    </div>
  )
}

export default Button