import React, {useEffect, useState} from 'react'
import img1 from '../../Images/Gallery/KR104395.jpg'
import img2 from '../../Images/Gallery/KRM08666.jpg'
import img3 from '../../Images/Gallery/KR104560.jpg'
import img4 from '../../Images/Gallery/KRM09506+(1).jpg'
import img5 from '../../Images/Gallery/KR104332.jpg'
import img6 from '../../Images/Gallery/KRM08129.jpg'
import img7 from '../../Images/Gallery/KRM07912.jpg'
import img8 from '../../Images/Gallery/KRM09803.jpg'
import img9 from '../../Images/Gallery/KRM09835+(1).jpg'
import img10 from '../../Images/Gallery/KRM07504.jpg'
import Loading from '../Loading'


export default function VibrantVoice() {
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

  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
  
  return (
    <div>
      <div className="glry">
        <div className="glry-container">
          {photos.map((item, index)=>(
            <img key={index} src={item} alt={`img${index+1}`}/>
          ))}
        </div>
    </div>
    </div>
  )
}
