import React, {useState, useEffect} from 'react'
import '../../Styles/heart-of-inclusion.css'
import img1 from '../../Images/Gallery/A247094C-7847-4E38-9FCF-917C3E31E189_L0_001-5_13_2024,+10_15_46+AM.jpg'
import img2 from '../../Images/Gallery/Variety+Gala+20240420+2007+AN0I8899.jpg'
import img3 from '../../Images/Gallery/Variety+Gala+20240420+2060+AN0I8778.jpg'
import img4 from '../../Images/Gallery/Variety+Gala+20240420+1016+AN0I8321.jpg'
import img5 from '../../Images/Gallery/Variety+Gala+20240420+1018+AN0I8331.jpg'
import img6 from '../../Images/Gallery/Variety+Gala+20240420+1055+AN0I8540+(1).jpg'
import img7 from '../../Images/Gallery/Variety+Gala+20240420+2009+AN0I8312.jpg'
import img8 from '../../Images/Gallery/Variety+Gala+20240420+1119+AN0I8926.jpg'
import img9 from '../../Images/Gallery/Variety+Gala+20240420+2014+AN0I8328.jpg'
import img10 from '../../Images/Gallery/Variety+Gala+20240420+2100+AN0I8920.jpg'
import img11 from '../../Images/Gallery/Variety+Gala+20240420+2052+AN0I8750.jpg'
import Loading from '../Loading'

export default function HeartOfInclusion() {


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
    <div className="glry">
        <div className="glry-container">
            <img src={img3} alt="img3" />
            <img src={img2} alt="img2" />
            <img src={img1} alt="img1" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
            <img src={img10} alt="img10" />
            <img src={img11} alt="img11" />
            <img src={img9} alt="img9" />
        </div>
    </div>
    </>

  )
}
