import { React, useState } from "react";
import "../../Styles/signup.css";
import axios from "axios";
import { toast } from 'react-toastify';


export default function Signup({ isOpen, onClose }) {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    password1: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (data.password === data.password1) {
        delete data.password1;
        const response = await axios.post("/api/users/register", data);
        onClose();
        toast.success('Logged out successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        alert("Passwords don't match");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  if (!isOpen) return null;
  const handleCloseModal = (event) => {
    // Check if the click is outside of the modal content
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} method="post">
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={data.fullname}
            onChange={handleChange}
            required
            placeholder="Enter Full Name"
          />

          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
            placeholder="Enter Email Address"
          />

          <label>Username</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
            placeholder="Enter Unique Username"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="password1"
            value={data.password1}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
