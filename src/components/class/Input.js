import React, { Component } from "react";
import "../../styles/Input.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  handleInput(e) {
    this.setState({
      word: e.target.value,
    });
  }

  searchKeyword() {
    this.props.searchKeywordHandler(this.state.word);
    this.setState({
      word: "",
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
        <button
          id="submit"
          onClick={() => this.props.searchKeywordHandler(this.state.word)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Input;
