import React, { Component } from "react";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import "../../styles/Dictionary.css";
import Default from "../../default.json";

class Dictionary extends Component {
  constructor() {
    super();
    this.state = {
      dictionary: Default.info,
    };
  }

  render() {
    const { dictionary } = this.state;

    return (
      <div className="Dictionary">
        <Header />
        <Input />
        <Output dictionary={dictionary} />
      </div>
    );
  }
}

export default Dictionary;
