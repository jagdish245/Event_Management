import React, {useState, useEffect} from 'react'
import Loading from '../Loading'
import '../../Styles/contact.css'

export default function PasswordReset() {
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
    <div className="contact">
        <div className="contact-title">
             <div className="heading">Reset password</div><br/>
             <p>
             Lost your password? Please enter your email address.<br/> If your Account exist, You will receive your password via email.
             </p>
        </div>
        <div className='contact-container'>
            <form action=''>

            <input type="email" id="email" name="email" placeholder='Your Email Address' required/><br/>
            
            <button type="submit">Get Link</button>
            </form>
        </div>
    </div>
  )
}
