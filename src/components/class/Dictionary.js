import React, { Component } from "react";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import "../../styles/Dictionary.css";
import RandomWords from "../../randomWords.json";
import Default from "../../default.json"; //To be removed when loading feature is fixed

class Dictionary extends Component {
  constructor() {
    super();
    this.state = {
      dictionary: [],
      //dictionary: Default, //To be removed when loading feature is fixed
      randomWords: RandomWords,
      showRandomWords: true,
    };

    this.searchKeywordHandler = this.searchKeywordHandler.bind(this);
    this.toggleRandomHandler = this.toggleRandomHandler.bind(this);
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
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { dictionary, randomWords, showRandomWords } = this.state;

    return (
      <div className="Dictionary">
        <Header />
        <Input
          searchKeywordHandler={this.searchKeywordHandler}
          toggleRandomHandler={this.toggleRandomHandler}
        />
        <Output
          dictionary={dictionary}
          randomWords={randomWords}
          showRandomWords={showRandomWords}
        />
      </div>
    );
  }
}

export default Dictionary;
