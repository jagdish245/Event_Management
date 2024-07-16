import React from 'react'
import '../Styles/sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="admin-sidebar">
        <ul>
            <li><i class="fas fa-users"></i>User List</li>
            <li><i class="fa-regular fa-calendar"></i> Event Post</li>
            <li><i class="fa-regular fa-bookmark"></i> Book Event</li>
            <li><i class="fas fa-th-large"></i> Post Category</li>
        </ul>
        <hr />
        <p>Authentication</p>
        <ul>
            <li><Link to={"/"}><i class="fa-solid fa-right-from-bracket"></i>Logout</Link></li>
        </ul>
    </div>
        
  )
}
