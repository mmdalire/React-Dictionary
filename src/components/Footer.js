import React, { Component } from "react";
import FooterDetailed from "./FooterDetailed";
import "../styles/Footer.css";
import reactLogo from "../images/react-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={reactLogo} id="logo" alt="React logo" />
        <div>
          <div className="footer-header">
            <h1>React Dictionary</h1>
          </div>
          <div className="footer-content">
            <FooterDetailed
              type="Class component"
              dateFrom="June 5, 2020"
              dateTo="June 13, 2020"
            />
            <FooterDetailed
              type="Function component"
              dateFrom="June 14, 2020"
              dateTo="June 15, 2020"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
