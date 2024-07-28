import React, { useState } from "react";
import "../../Styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ isOpen, onClose }) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;
  const handleCloseModal = (event) => {
    // Check if the click is outside of the modal content
    if (event.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/admin/adminLogin", {
        username,
        password,
      });

      if (response.status === 200) {
        navigate("/admin/home");
      } else {
        setError("Invalid admin credentials");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form action="../../Admin/Components/Home.js" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="uname"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            placeholder="Enter Username"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
