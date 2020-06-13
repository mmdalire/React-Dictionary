import React, { Component } from "react";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import PoweredBy from "./PoweredBy";
import "../../styles/Dictionary.css";
import RandomWords from "../../randomWords.json";

class Dictionary extends Component {
  constructor() {
    super();
    this.state = {
      dictionary: [],
      randomWords: RandomWords,
      showRandomWords: true,
      doneSearching: false,
    };

    this.searchKeywordHandler = this.searchKeywordHandler.bind(this);
    this.toggleRandomHandler = this.toggleRandomHandler.bind(this);
    this.doneSearchingHandler = this.doneSearchingHandler.bind(this);
  }

  searchKeywordHandler(word) {
    this.searchKeywordApi(word);
  }

  toggleRandomHandler(status) {
    this.setState({
      dictionary: [],
      showRandomWords: status,
    });
  }

  doneSearchingHandler(reset) {
    this.setState({
      doneSearching: false,
    });
  }

  searchKeywordApi(word) {
    const BASE_URL =
      "https://dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = `key=${process.env.REACT_APP_DICTIONARY_KEY}`;
    const URL = `${BASE_URL}${word}?${API_KEY}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dictionary: data,
          doneSearching: true,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      dictionary,
      randomWords,
      showRandomWords,
      doneSearching,
    } = this.state;

    return (
      <div className="Dictionary">
        <Header />
        <Input
          searchKeywordHandler={this.searchKeywordHandler}
          toggleRandomHandler={this.toggleRandomHandler}
          doneSearchingHandler={this.doneSearchingHandler}
        />
        <Output
          dictionary={dictionary}
          randomWords={randomWords}
          showRandomWords={showRandomWords}
          doneSearching={doneSearching}
        />
        <PoweredBy />
      </div>
    );
  }
}

export default Dictionary;
