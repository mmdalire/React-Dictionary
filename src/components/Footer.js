import React, { Component } from "react";
import FooterDetailed from "./FooterDetailed";
import "../styles/Footer.css";
import reactLogo from "../images/react-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={reactLogo} id="logo" alt="React logo" />
        <div className="footer-content">
          <h1>React Dictionary</h1>
          <div className="footer-detailed-container">
            <FooterDetailed
              type="Class component"
              dateFrom="June 5, 2020"
              dateTo="-"
            />
            <FooterDetailed type="Function component" dateFrom="-" dateTo="-" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
