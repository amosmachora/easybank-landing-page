import React from "react";
import "./Header.css";
import { RequestButton } from "./NavBar";
import BGDesktop from "../images/bg-intro-desktop.svg";
import Mockups from "../images/image-mockups.png";

const Header = () => {
  return (
    <header className="header padding-left flex">
      <div className="header-left">
        <h1>Next generation digital banking</h1>
        <p className="subtext">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="invite">
          <RequestButton context={"header-button"} />
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-images">
          <img src={Mockups} alt="Mockups" className="mockups" />
          <img
            src={BGDesktop}
            alt="Background SVG for desktop"
            className="mockup-background"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
