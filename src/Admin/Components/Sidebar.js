import React from "react";
import "../Styles/sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="admin-sidebar">
      <ul>
        <li>
          <Link to={"/admin/userlist"}>
            <i class="fas fa-users"></i>User List
          </Link>
        </li>
        <li>
          <Link to={"/admin/event"}>
            <i class="fa-regular fa-calendar"></i> Event Post
          </Link>
        </li>
        <li>
          <i class="fa-regular fa-bookmark"></i> Active Events
        </li>
        <li>
          <i class="fas fa-th-large"></i> Post Category
        </li>
      </ul>
      <hr />
      <p>Authentication</p>
      <ul>
        <li>
          <Link to={"/"}>
            <i class="fa-solid fa-right-from-bracket"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
