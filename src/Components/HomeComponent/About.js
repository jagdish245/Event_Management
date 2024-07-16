import React from 'react'
import '../../Styles/about.css'
import poppedparty from '../../Images/PoppedParty-MelissaSiglerPhoto-140.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
          <h1>Curated Event Experiences</h1>
          <p>“HARMONI EVENTS” is an Ahmedabad based Royal Wedding Planning & Event Management Company which is large enough to operate efficiently and effectively, yet small enough to create the event of your dreams with relentless pursuit of perfection.</p>
          <p>We are inspired by our clients’ mission, values, and goals to create memorable experiences and cultivate lasting impressions and impact. From spreadsheets to illustrated activations, let us help share your vision and build your dream event.</p>
          <br/>
          <Link to={"/aboutpage"}>About Us</Link>
      </div>
      
      <img src={poppedparty} alt='aboutImage' />
    </div>
  )
}
