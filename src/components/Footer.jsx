import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Products</h5>
          <Link to="/product1">Flick Analytics</Link>
          <Link to="/product2">Em Metrics</Link>
          {/* <Link to="/product3">Edu Analytics</Link>
          <Link to="/product4">Medical Analytics</Link> */}
        </div>

        {/* <div className="footer-section">
          <h5>Solutions</h5>
          <Link to="/movie-analytics">Movie Analytics</Link>
          <Link to="/civil-analytics">Civil Analytics</Link>
          <Link to="/education-analytics">Education Analytics</Link>
          <Link to="/doctor-analytics">Doctor Analytics</Link>
        </div> */}

        <div className="footer-section">
          <h5>Contact</h5>
          <a href="tel:+919884442082">Phone: +91 9884442082</a>
          <a href="mailto:contact@indominouslabs.in">Email: contact@indominouslabs.in</a>
          <p>Location: Chennai</p>
        </div>

        <div className="footer-section">
          <h5>Company</h5>
          <Link to="/about">About Us</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/life">Life at Indominus Labs</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <p>Made with <FaHeart className="heart-icon" /> by</p>
          <img src="/newlogo.png" alt="Indominus Labs Logo" className="footer-main-logo" />
        </div>
        <div className="social-logos">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/indominus-labs-210b4b24b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;