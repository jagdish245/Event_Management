import React from 'react'
import '../../Styles/gallery.css'
import img1 from '../../Images/Gallery/Variety+Gala+20240420+1055+AN0I8540+(1).jpg'
import img2 from '../../Images/Gallery/KR104395.jpg'
import { Link } from 'react-router-dom'
export default function Gallery() {
  return (
    <>
        <div className="gallery-title">
            In The Spotlight
        </div>
        <div className="gallery-card">
            <div className="glr-card">
                <img src={img1} alt='image1'></img>
                <Link to={"/heartofinclusion"}><button>View Gallery</button></Link>
            </div>
            <div className="glr-card">
                  <img src={img2} alt='image2'></img>
                  <Link to={"/vibrantvoice"}><button>View Gallery</button></Link>
            </div>
        </div>
    </>
  )
}
