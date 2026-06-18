import React from 'react'
import 'remixicon/fonts/remixicon.css'



function Card(props) {
    console.log(props.company)
  return (
    <div className="card">
      <div className="top">
        <img src={props.image} alt="" />
        <button>Save<i className="ri-bookmark-line"></i></button>
      </div>
      <div className="center">
        <h3>{props.company} <span>{props.postedAgo}</span></h3>
        <h2>{props.title}</h2>
        <div className="details">
          <h4>{props.type}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      <div className="bottom">
          <div>
            <h3>{props.rate}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now!</button>
      </div>
    </div>
  )
}

export default Card