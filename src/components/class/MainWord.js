import React, { Component } from "react";
import "../../styles/MainWord.css";

class MainWord extends Component {
  render() {
    const { word, figureOfSpeech } = this.props;

    return (
      <div className="MainWord">
        <h1 id="output-word">{word}</h1>
        <h3 id="figure-speech">{figureOfSpeech}</h3>
      </div>
    );
  }
}

export default MainWord;
