import React from 'react'
import '../../Styles/slidingBanner.css'
import group from '../../Images/group.svg'
import couple from '../../Images/wedding-couple.svg'
import destination from '../../Images/destination.svg'
import briefcase from '../../Images/briefcase.svg'

export default function SlidingBanner() {
  return (
    <>
      <div className='sliding-banner'>
        <div className="text-slide">
          <pre>
          <span className="planning-text">
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          PLANNING WITH HEART     PLANNING WITH HEART     PLANNING WITH HEART
          </span>
          </pre>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail">
          
          <div className="detail-box">
            <img src={group} alt="briefcase" />
            <div className="box-title">
              2000+
            </div>
            <p>People Talking About Us</p>  
          </div>

          <div className="detail-box">
            <img src={couple} alt="briefcase" />
            <div className="box-title">
              250+
            </div>
            <p>Wedding Organized</p>  
          </div>

          <div className="detail-box">
            <img src={destination} alt="briefcase" />
            <div className="box-title">
              20+
            </div>
            <p>Destinations Covered</p>  
          </div>

          <div className="detail-box">
            <img src={briefcase} alt="briefcase" />
            <div className="box-title">
              12+
            </div>
            <p>Years Exposure</p>  
          </div>

        </div>
      </div>
    </>
  )
}
