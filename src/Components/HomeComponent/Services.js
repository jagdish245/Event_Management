import React from 'react'
import '../../Styles/services.css'

export default function Services() {
  return (
    <div className="service-container">
        <div className="service">
            <div className="service-box">
                <div className="title">
                    PLANNING
                </div>
                <div className="description">
                With over a decade of experience, leave the spreadsheets, budget management, vendor outreach, mobile bidding software, and onsite event management to us. 
                </div><br/>
                <hr/>
            </div>
            <div className="service-box">
                <div className="title">
                    DESIGN
                </div>
                <div className="description">
                From event storyboarding to comprehensive marketing plans, our dedicated team will meticulously design and execute your dream event, starting from the ground up.
                </div><br/>
                <hr/>
            </div>
            <div className="service-box">
                <div className="title">
                    PRODUCTION
                </div>
                <div className="description">
                Stage management is our forte. Working with our preferred production partners, we will ensure that every light, sound, and moment is perfectly on cue! Did we mention that scripting is also in our scope? 
                </div><br/>
            </div>
            <div className="service-box">
                <div className="title">
                    CULTIVATION
                </div> 
                <div className="description">
                You bring the contacts, and we will bring the solicitation and fulfillment management! Not only that, but we will oversee the event board, leadership, and committee communications to ensure that we stay on track for a successful event.
                </div><br/>

            </div>
        </div>
    </div>
  )
}
