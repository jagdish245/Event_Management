import React from 'react';
import '../../Styles/signup.css'
import { Link } from 'react-router-dom';

export default function Login({ isOpen, onClose }) {

  if (!isOpen) return null;
  const handleCloseModal = (event) => {
    // Check if the click is outside of the modal content
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }  
  }; 

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
          <h2>Login</h2>
              <form>
                  <label>Email ID</label>
                    <input type="text" name="email" required placeholder='Enter Email Address'/>
                 
                  <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required/>

                  <Link to={"/passwordreset"} onClick={onClose}>Forgot Password?</Link>

                  <button type="submit">Log in</button>
              </form>
      </div>
    </div>
  );
}
