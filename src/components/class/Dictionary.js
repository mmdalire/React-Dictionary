import React, { Component } from "react";
import Header from "./Header";
import Input from "./Input";
import "../../styles/Dictionary.css";

class Dictionary extends Component {
  render() {
    return (
      <div className="Dictionary">
        <Header />
        <Input />
      </div>
    );
  }
}

export default Dictionary;
