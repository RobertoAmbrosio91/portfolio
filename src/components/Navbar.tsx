import React, { useState } from "react";

import { Link } from "react-scroll";
import useWindowWidth from "../hooks/getWindowWidth";
import { FaBars } from "react-icons/fa";
import "../styles/App.scss";

const Navbar = () => {
  const windowWidth = useWindowWidth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="Navbar">
      {windowWidth > 800 ? (
        <div className="Navbar-Web">
          <Link to="about" smooth={true} duration={500} className="nav-link">
            <p>About</p>
          </Link>
          <Link
            to="expertise"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            <p>Expertise</p>
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            <p>Portfolio</p>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            <p>Contact</p>
          </Link>
        </div>
      ) : (
        <div className="Navbar-Mobile">
          <div
            className={`hamburger ${dropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`Navbar-Dropdown ${dropdownOpen ? "active" : ""}`}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setDropdownOpen(false)}
              className="nav-link"
            >
              <p>About</p>
            </Link>
            <Link
              to="expertise"
              smooth={true}
              duration={500}
              onClick={() => setDropdownOpen(false)}
              className="nav-link"
            >
              <p>Expertise</p>
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setDropdownOpen(false)}
              className="nav-link"
            >
              <p>Portfolio</p>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setDropdownOpen(false)}
              className="nav-link"
            >
              <p>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
