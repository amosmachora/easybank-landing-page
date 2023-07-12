import React from "react";
import "./Footer.css";
import Logo from "../images/logoFooter.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import { RequestButton } from "./NavBar";

const Footer = () => {
  return (
    <footer className="flex">
      <section>
        <img src={Logo} alt="Logo" />
        <div className="socials">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={pinterest} alt="Pinterest" />
          <img src={twitter} alt="Twitter" />
          <img src={youtube} alt="Youtube" />
        </div>
      </section>
      <section>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
      </section>
      <section>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </section>
      <section>
        <div className="request-button-container">
          <RequestButton context={"footer"} />
        </div>
        <p className="copy-right">© Easybank. All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
