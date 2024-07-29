import React, { useState, useEffect, useContext } from "react";
import "../Styles/navbar.css";
import logo from "../Images/Harmoni (1).png";
import { Link } from "react-router-dom";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import AdminLogin from "./Authentication/AdminLogin";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isModalRegisterOpen, setisModalRegisterOpen] = useState(false);
  const [isModalLoginOpen, setisModalLoginOpen] = useState(false);
  const [isModalAdminOpen, setisModalAdminOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isModalRegisterOpen || isModalLoginOpen || isModalAdminOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalRegisterOpen, isModalLoginOpen, isModalAdminOpen]);

  const openRegisterModal = () => {
    setisModalRegisterOpen(true);
  };

  const openLoginModal = () => {
    setisModalLoginOpen(true);
  };

  const openAdminModal = () => {
    setisModalAdminOpen(true);
  };

  const closeRegisterModal = () => {
    setisModalRegisterOpen(false);
  };

  const closeLoginModal = () => {
    setisModalLoginOpen(false);
  };

  const closeAdminModal = () => {
    setisModalAdminOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await axios.post("/api/users/logout");
    setUser(null);
    navigate("/");
    toast.success("Logged out", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/aboutpage"}>About</Link>
            </li>
            <li>
              <Link to={"/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="signup">
          <ul>
            {user ? (
              <div className="profile-menu">
                <div className="profile-icon-text">
                  <FaUserCircle className="profile-icon" />
                  <span className="profile-text">Profile</span>
                </div>
                <div className="profile-menu-dropdown">
                  <Link to={"/registeredEvent"} className="profile-menu-item">
                    Registered Events
                  </Link>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="profile-menu-item"
                  >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <>
                <li className="dropdown">
                  <span>
                    Login <i className="fa-solid fa-caret-down"></i>
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link onClick={openLoginModal}>User Login</Link>
                    </li>
                    <li>
                      <Link onClick={openAdminModal}>Admin Login</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={openRegisterModal}>Register</Link>
                </li>
              </>
            )}
            <Login isOpen={isModalLoginOpen} onClose={closeLoginModal} />
            <AdminLogin isOpen={isModalAdminOpen} onClose={closeAdminModal} />
            <Signup isOpen={isModalRegisterOpen} onClose={closeRegisterModal} />
          </ul>
        </div>
        <div className="toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
