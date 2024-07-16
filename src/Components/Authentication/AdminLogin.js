import React from 'react';
import '../../Styles/signup.css'

export default function AdminLogin({ isOpen, onClose }) {

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
              <form action='../../Admin/Components/Home.js'>
                  <label>Username</label>
                    <input type="text" name="uname" required placeholder='Enter Username'/>
                 
                  <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required/>

                  <button type="submit">Log in</button>
              </form>
      </div>
    </div>
  );
}
