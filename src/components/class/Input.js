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

  isInputEmpty() {
    return this.state.word ? false : true;
  }

  searchKeyword(word, showRandomWords, doneSearching) {
    this.props.searchKeywordHandler(word);
    this.props.toggleRandomHandler(showRandomWords);
    this.props.doneSearchingHandler(doneSearching);
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
          onClick={() =>
            this.searchKeyword(this.state.word, this.isInputEmpty(), false)
          }
        >
          Search
        </button>
      </div>
    );
  }
}

export default Input;
