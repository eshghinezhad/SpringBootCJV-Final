import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import '../css/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
          <ul className="footer-menu">
            <li><Link to="/">Home |</Link></li>
            <li><Link to="/about">About Us |</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XIcon /></a>
          </div>
      </div>

      <div >
        <p className="footer-text">© 2025 Movie.Ca | All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;