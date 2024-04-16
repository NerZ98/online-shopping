import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
