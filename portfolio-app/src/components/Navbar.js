import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/navBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/joshua-river-maners-9a5844241/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/river.maners/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/rivermaners"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://open.spotify.com/user/river.maners"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaSpotify />
          </a>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>

        <ul className={`nav-menu full-screen-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
