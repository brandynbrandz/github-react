import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer-container">
      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/about"> How it works </Link>
            <Link to="/">My repos</Link>

          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Remotemore </Link>
            <Link to="/">Support</Link>

                   </div>
        </div>
        
      </div>

      <section className="footer-media">
        <div className="footer-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
            <i className="fas fa-user-astronaut"></i> GITHUB APP
            </Link>
          </div>
          <small className="website-rights">BRANDYN © {currentYear}</small>
          
        </div>
      </section>
    </div>

    )
}

export default Footer
