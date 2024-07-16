import React from 'react'
import '../../Styles/description.css'
import { Link } from 'react-router-dom'

export default function Description() {
  return (
    <div className='description-container'>
      <div className="box">
        <div className="content">
          <div className="content-whatisit">
            <div className="what">
              What is Harmony<br/> Event
            </div>
            <div className="isit">
            Harmoni Event is your go-to for seamless event planning and management. We create memorable experiences tailored to your vision, ensuring every detail is perfectly harmonized. Trust us to turn your ideas into reality with precision and style.
            </div>
          </div>

          <div className="content-link">
            <div className="content-first">
              Your Event Will be Beyond Your <br/>Imagination
              </div>
            <div className="content-second">
              <Link>
              Explore the Gallery <i class="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}
