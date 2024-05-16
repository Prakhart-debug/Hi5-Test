// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ onAddClick }) {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <Link to="/">
          <FaHome size={30} />
        </Link>
      </div>
      <div className="sidebar-icon" onClick={onAddClick}>
        <FaPlus size={30} />
      </div>
    </div>
  );
}

export default Sidebar;
