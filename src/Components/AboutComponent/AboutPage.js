import React, {useEffect, useState} from 'react'
import '../../Styles/aboutpage.css'
import Loading from '../Loading';
import '../../Styles/about.css'
import aboutPageImage from '../../Images/Chappelow+Events+About+Us+Page+(1).png'
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      window.scrollTo(0,0);
  
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <Loading />;
    }
  return (
    <>
        <div className="aboutpage-container">
            <div className="aboutpage">
                <h1>Organization, details, logistics</h1>

                <p>At Harmoni Events, we help manage your big ideas and your smallest concerns to ensure you are stress-free and enjoying every moment. For more than a decade, we’ve been working with clients to create exceptional experiences for their nonprofit fundraiser or social gathering.</p>

                <p>As a boutique company, we’re driven by a childlike excitement for what we do and a love of collaboration with our clients. It’s our goal to leave you and your guests with an event that exceeds expectations and lasts in your memories long after the last toast.</p>
            </div>
        </div>
        <div className="about1-container">
            <div className="about-text">
                <h1>Time for a Backstory</h1>
                <p>Harmony Events was founded in 2012 by Beth Harmony. Over the past decade, Harmony Events has grown to become one <b>of the leading planning and design companies in Ahmedabad City and beyond.</b> From coast to coast and abroad, our team’s greatest pleasure is exceeding client expectations.</p>
                <Link to={"../contact"}>Get in Touch</Link>
            </div>
        
            <img src={aboutPageImage} alt='aboutImage' />
        </div>
    </>
  )
}
