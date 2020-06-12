import React, { Component } from "react";
import "../../styles/RandomWord.css";

class RandomWord extends Component {
  //Choose random word
  chooseRandomWord(wordsArray, index) {
    return [wordsArray[index].word, wordsArray[index].definition];
  }

  render() {
    const { randomWords } = this.props;
    const index = Math.ceil(Math.random() * (randomWords.length - 1));
    const word = this.chooseRandomWord(randomWords, index)[0];
    const definition = this.chooseRandomWord(randomWords, index)[1];
    return (
      <div className="RandomWord">
        <h1 id="title">Random Word</h1>
        <h3 id="leading-word">{word}</h3>
        <p id="description">{definition}</p>
      </div>
    );
  }
}

export default RandomWord;
