import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../Styles/home.css";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-main-layout">
        <Sidebar />
        <div className="admin-content">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}
