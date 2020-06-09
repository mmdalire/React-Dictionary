import React, { Component } from "react";
import MainWord from "./MainWord";
import Detailed from "./Detailed";
import Definition from "./Definition";
import "../../styles/WordItem.css";

class WordItem extends Component {
  removeDuplicates(word) {
    return word.includes(":") ? word.split(":")[0] : word;
  }

  changeSyllableStyle(syllable) {
    return syllable.split("*").join("•");
  }

  render() {
    const { dictionary } = this.props;
    return (
      <div className="WordItem">
        <MainWord
          word={this.removeDuplicates(dictionary.meta.id)}
          figureOfSpeech={dictionary.fl}
        />
        <Detailed
          syllable={this.changeSyllableStyle(dictionary.hwi.hw)}
          pronounciation={dictionary.hwi.prs[0].mw}
        />
        <Definition
          word={this.removeDuplicates(dictionary.meta.id)}
          definition={dictionary.def[0]}
        />
      </div>
    );
  }
}

export default WordItem;
