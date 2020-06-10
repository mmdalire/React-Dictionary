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
      dictionary: Default,
    };
    this.searchKeywordHandler = this.searchKeywordHandler.bind(this);
  }

  searchKeywordHandler(word) {
    this.searchKeywordApi(word);
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
    const { dictionary } = this.state;

    return (
      <div className="Dictionary">
        <Header />
        <Input searchKeywordHandler={this.searchKeywordHandler} />
        <Output dictionary={dictionary} />
      </div>
    );
  }
}

export default Dictionary;
