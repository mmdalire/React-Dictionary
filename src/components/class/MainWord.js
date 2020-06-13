import React, { Component } from "react";
import "../../styles/MainWord.css";

class MainWord extends Component {
  render() {
    const { word, figureOfSpeech, styles } = this.props;
    return (
      <div style={{ color: styles.color }} className="MainWord">
        <h1 style={{ borderRightColor: styles.color }} id="output-word">
          {word}
        </h1>
        <h3 id="figure-speech">{figureOfSpeech}</h3>
      </div>
    );
  }
}

export default MainWord;
