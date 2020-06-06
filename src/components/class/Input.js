import React, { Component } from "react";
import "../../styles/Input.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      word: e.target.value,
    });
  }

  render() {
    return (
      <div className="Input">
        <i className="fas fa-search" id="search-logo"></i>
        <input
          type="text"
          placeholder="Search keyword"
          onChange={this.handleInput}
        />
        <button id="submit">Search</button>
      </div>
    );
  }
}

export default Input;
