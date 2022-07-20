import React from 'react'
import './footer.css'
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
import  logo  from "../../img/Logo.png";


const Footer = () => {
  return (
    <div className='footercontainer' >
      <div className="wrapper">
        <div className="logosec">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat ipsa</p>
        </div>

        <div className="socials">
          <AiFillLinkedin/>
          <AiFillFacebook/>
          <AiFillInstagram/>
          <AiFillYoutube/>
        </div>
        
      </div>

    </div>
  )
}

export default Footer