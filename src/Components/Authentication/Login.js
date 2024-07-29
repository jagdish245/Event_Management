import React, { useState, useContext } from "react";
import "../../Styles/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { toast } from "react-toastify";

export default function Login({ isOpen, onClose }) {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;
  const handleCloseModal = (event) => {
    // Check if the click is outside of the modal content
    if (event.target.classList.contains("modal-overlay")) {
      setError("");
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data.user);
        onClose();
      } else {
        setError("Invalid login credentials");
      }

      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email ID</label>
          <input
            type="text"
            name="email"
            required
            placeholder="Enter Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <Link to={"/passwordreset"} onClick={onClose}>
            Forgot Password?
          </Link>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
