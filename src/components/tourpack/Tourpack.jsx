import React from 'react'
import './tourpack.css'

const Tourpack = (props) => {
  return (
    <div className='Tourpack'>
      <img src={props.Img} alt="" />
      <h3 className="h3title">{props.Place}</h3>

      <div className="packdetails">
        <div className="timing">
          {props.Icon}
          <p className='days'>{props.Duration}</p>
        </div>
        <span className='price' >{props.Price}</span>
      </div>
    </div>
  )
}

export default Tourpack