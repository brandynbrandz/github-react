import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           <i className="fas fa-user-astronaut"></i> GITHUB APP
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa fa-bars"} aria-hidden="true"/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/repositories/brandynbrandz"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Brandyn Repos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Instructions
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
