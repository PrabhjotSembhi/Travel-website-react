import React from 'react'
import './testimonial.css';

const Testimonial = (props) => {
  return (
    <div className='testimonialInnerWrapp'>
      <img src={props.Img} alt="" />
      <p className="name">{props.Name}</p>
      <p className="tile">{props.Title}</p>
      <div className="rating">{props.Rating}</div>
      <p className="review">{props.Review}</p>
    </div>
  )
}

export default Testimonial