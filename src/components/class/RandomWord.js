import React, { Component } from "react";
import "../../styles/RandomWord.css";

class RandomWord extends Component {
  //Choose random word
  chooseRandomWord(wordsArray, index) {
    return [wordsArray[index].word, wordsArray[index].definition];
  }

  render() {
    const { randomWords, styles } = this.props;
    const index = Math.ceil(Math.random() * (randomWords.length - 1));
    const word = this.chooseRandomWord(randomWords, index)[0];
    const definition = this.chooseRandomWord(randomWords, index)[1];

    return (
      <div style={{ color: styles.color }} className="RandomWord">
        <h1
          style={{
            color: styles.backgroundColor,
            backgroundColor: styles.color,
          }}
          id="title"
        >
          Random Word
        </h1>
        <h3 style={{ borderBottomColor: styles.color }} id="leading-word">
          {word}
        </h3>
        <p id="description">{definition}</p>
      </div>
    );
  }
}

export default RandomWord;
