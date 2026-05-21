import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo">P</div>
        <h2>Smart Parking</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Parking..."
        />
        <button>Search</button>
      </div>

      <div className="nav-buttons">
        <button className="about-btn">
          About
        </button>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;