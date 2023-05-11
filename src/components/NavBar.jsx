import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.ico";

const NavBar = () => {
  return (
    <div className="top">
      <div className="navbar">
        <div className="leftContainer">
          <img src={Logo} alt="logo" />
          <h1>
            PULFERMULLER <span className="firstName">ARTHUR</span>
          </h1>
        </div>
        <div className="rightContainer">
          <ul className="menu">
            <Link
              data-text="ACCUEIL"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="hamburgerNav">ACCUEIL</li>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="hamburgerNav">PORTFOLIO</li>
            </Link>
            <Link
              to="career"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="hamburgerNav">PARCOURS</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="hamburgerNav">CONTACT</li>
            </Link>
          </ul>
          <div className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bloc"></div>
      <div className="marquee-rtl">
        RECHERCHE ACTIVEMENT UN POSTE EN ALTERNANCE DANS LE MORBIHAN
      </div>
    </div>
  );
};

export default NavBar;
