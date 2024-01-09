import React from 'react'
import './Titles.css'

const Titles = (props) => {
  return (
    <div>
        <h1 className='title'>{props.title}</h1>
    </div>
  )
}

export default Titles