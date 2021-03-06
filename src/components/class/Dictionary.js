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
      styles: {
        backgroundColor: "var(--class-component-secondary)",
        color: "var(--class-component-primary)",
      },
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
    const baseUrl = "/.netlify/functions/get_words?";
    const searchWord = `word=${word}`;
    const URL = `${baseUrl}${searchWord}`;

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
      styles,
    } = this.state;

    return (
      <div className="Dictionary">
        <Header styles={styles} />
        <Input
          styles={styles}
          searchKeywordHandler={this.searchKeywordHandler}
          toggleRandomHandler={this.toggleRandomHandler}
          doneSearchingHandler={this.doneSearchingHandler}
        />
        <Output
          styles={styles}
          dictionary={dictionary}
          randomWords={randomWords}
          showRandomWords={showRandomWords}
          doneSearching={doneSearching}
        />
        <PoweredBy styles={styles} />
      </div>
    );
  }
}

export default Dictionary;
