import React from 'react'
import '../../Styles/contact.css'

export default function Contact() {


  return (
    <div className="contact">
        <div className="contact-title">
             <div className="heading">GET IN TOUCH WITH US</div><br/>
             <p>
             For general business and press inquiries <br/>
             hello@harmonievents.com <br/>
             P.H: 814-128-7725<br/><br/>
             For event inquiries, please fill out the form below and one of <br></br>our team members will get back to you within 24 hours.
             </p>
        </div>
        <div className='contact-container'>
            <form action=''>

            <label htmlFor="fname">First name</label>
            <input type="text" id="lname" name="fname" required/><br/>

            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname"/><br/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/><br/>

            <label htmlFor="eid">Event ID</label>
            <input type="text" id="eid" name="eid"/><br/>

            <label htmlFor="query">Your Query</label>
            <textarea id="query" name="query" required></textarea>
            
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
