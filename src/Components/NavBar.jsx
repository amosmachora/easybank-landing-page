import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

const NavBar = () => {
  const [icon, setIcon] = useState(Hamburger);
  const [smallScreenMenu, setSmallScreenMenu] = useState(false);

  const handleSmallScreenMenu = () => {
    setSmallScreenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (smallScreenMenu === true) {
      setIcon(Close);
    } else {
      setIcon(Hamburger);
    }
  }, [smallScreenMenu]);

  return (
    <nav className="navbar flex padding">
      <img src={Logo} alt="Logo" />
      <ul className="nav-links flex">
        <li className="nav-link">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Contact</li>
        <li className="nav-link">Blog</li>
        <li className="nav-link">Careers</li>
      </ul>
      <RequestButton />
      <img src={icon} alt="Toggle Icon" onClick={handleSmallScreenMenu} />
      {smallScreenMenu === true ? (
        <div className="small-screen-overlay">
          <div className="small-screen-nav">
            <ul className="nav-links-small-screen flex-column">
              <li className="nav-link">Home</li>
              <li className="nav-link">About</li>
              <li className="nav-link">Contact</li>
              <li className="nav-link">Blog</li>
              <li className="nav-link">Careers</li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;

export const RequestButton = ({ context }) => {
  return <p className={`request-button ${context}`}>Request Invite</p>;
};
