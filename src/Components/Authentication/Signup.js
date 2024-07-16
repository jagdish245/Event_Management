import React from 'react';
import '../../Styles/signup.css'

export default function Signup({ isOpen, onClose }) {

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
        <h2>Register</h2>
              <form>
                  <label>Full Name</label>
                    <input type="text" name="fullname" required placeholder='Enter Full Name'/>

                  <label>Email ID</label>
                    <input type="email" name="email" required placeholder='Enter Email Address' />

                  <label>Username</label>
                    <input type="text" name="username" required placeholder='Enter Unique Username' />
                 
                  <label>Password</label>
                    <input type="password" name="password1" placeholder="Enter your password" required/>

                  <label>Confirm Password</label>
                    <input type="password" name="password2" placeholder="Confirm your password" required/>
                 
                  <button type="submit">Signup</button>
              </form>
      </div>
    </div>
  );
}
