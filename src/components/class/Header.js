import React, { Component } from "react";
import "../../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <i className="fas fa-book-reader fa-3x"></i>
        <h1>React Dictionary</h1>
      </div>
    );
  }
}

export default Header;
