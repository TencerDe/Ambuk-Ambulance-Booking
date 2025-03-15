import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"; // Ensure this CSS file exists

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current page path

  return (
    <nav className="navbar">
      <h1 className="logo">Ambuk</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/login" 
            className={location.pathname === "/login" ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link 
            to="/signup" 
            className={location.pathname === "/signup" ? "active" : ""} 
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};



export default Navbar;
