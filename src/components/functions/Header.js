import React from "react";
import "../../styles/Header.css";

const Header = (props) => {
  const { styles } = props;
  return (
    <div style={styles} className="Header">
      <i className="fas fa-book-reader fa-3x"></i>
      <h1>React Dictionary</h1>
    </div>
  );
};

export default Header;
