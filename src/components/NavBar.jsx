import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/logo.ico";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="top">
      <div className={`navbar ${showLinks ? "showNav" : ""} `}>
        <div className="leftContainer">
          <img src={Logo} alt="logo" />
          <h1>
            PULFERMULLER <span className="firstName">ARTHUR</span>
          </h1>
        </div>
        <div className="rightContainer">
          <ul className="navbarLinks">
            <Link
              data-text="ACCUEIL"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="navLink">ACCUEIL</li>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="navLink">PORTFOLIO</li>
            </Link>
            <Link
              to="career"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="navLink">PARCOURS</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li className="navLink">CONTACT</li>
            </Link>
          </ul>
        </div>
        <button className="navbarBurger" onClick={handleShowLinks}>
          <span className="burgerBar"></span>
        </button>
      </div>
      <div className="bloc"></div>
      <div className="marquee-rtl">
        RECHERCHE ACTIVEMENT UN POSTE EN ALTERNANCE DANS LE MORBIHAN
      </div>
    </div>
  );
};

export default NavBar;
