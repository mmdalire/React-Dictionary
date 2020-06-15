import React from "react";
import "../../styles/MainWord.css";

const MainWord = (props) => {
  const { word, figureOfSpeech, styles } = props;
  return (
    <div style={{ color: styles.color }} className="MainWord">
      <h1 style={{ borderRightColor: styles.color }} id="output-word">
        {word}
      </h1>
      <h3 id="figure-speech">{figureOfSpeech}</h3>
    </div>
  );
};

export default MainWord;
