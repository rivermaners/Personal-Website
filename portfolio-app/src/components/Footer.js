import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/images/river-logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-top">
        <div className="footer-contact">
          <p>
            <FaPhoneAlt /> (661) 607-5737 &nbsp;&nbsp;
          </p>
          <p>
            <FaEnvelope /> river.maners@gmail.com
          </p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/joshua-river-maners-9a5844241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/river.maners/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/rivermaners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://open.spotify.com/user/river.maners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} River Maners
        </div>
      </div>
    </footer>
  );
};

export default Footer;
