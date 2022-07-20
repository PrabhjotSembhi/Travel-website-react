import React from 'react'
import './topcity.css';

const Topcity = (props) => {
  return (
    <div className='cityContainer' style={{    backgroundImage: `url(${props.Img})`    , backgroundSize:'cover', objectFit:'cover', backgroundPosition: 'center center', marginTop: '20px', borderRadius: '20px'}} >
      <p className="country">{props.Country}</p>

      <div className="citydetails">
        <h3 className="cityName">{props.City}</h3>
        <p className="stat">{props.Stat}</p>
      </div>

    </div>
  )
}

export default Topcity