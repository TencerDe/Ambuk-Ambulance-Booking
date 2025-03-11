import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navbar'>
            <h1 className="logo">Ambuk</h1>
            {/* Hamburger Menu Button */}
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰
            </button>

            {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link></li>
      </ul>
    </nav>
    );
};

export default Navbar;