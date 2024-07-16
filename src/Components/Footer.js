import React from 'react'
import '../Styles/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-content">
          
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Events</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
          <hr />
          <div className="company-name">
            &copy; 2024 Harmony, Inc
          </div>
        </div>
      </div>
    </footer>
  )
}
