import React from 'react';
import '../assets/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="checkmark">✓</span>
            </div>
            <h1>TaskMaster</h1>
          </div>
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <button className="nav-btn active">All Tasks</button>
            <button className="nav-btn">Active</button>
            <button className="nav-btn">Completed</button>
          </nav>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Tasks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;