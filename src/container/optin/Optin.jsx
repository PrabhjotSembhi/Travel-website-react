import React from 'react'
import './optin.css'

const Optin = () => {
  return (
    <div className='optinContainer'>
      <div className="wrapper">
        <div className="optindiv">
          <div className="optintxt">
            <h2 className="title">Get our pro offers </h2>
            <p>Create a visual identity for your company, and an overall brand</p>
          </div>

          <div className="form">
            <input className='feild' type="text" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optin