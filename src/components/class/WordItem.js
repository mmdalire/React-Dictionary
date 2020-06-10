import React, { Component } from "react";
import MainWord from "./MainWord";
import Detailed from "./Detailed";
import Definition from "./Definition";
import OtherUsage from "./OtherUsage";
import "../../styles/WordItem.css";

class WordItem extends Component {
  removeDuplicates(word) {
    return word.includes(":") ? word.split(":")[0] : word;
  }

  changeSyllableStyle(syllable) {
    return syllable.split("*").join("•");
  }

  //If there are no pronounciations listed, return nothing
  checkPronounciation(object) {
    if (!("prs" in object)) {
      return {
        ...object,
        prs: [{ mw: "--" }],
      }.prs[0].mw;
    }
    return object.prs[0].mw;
  }

  //Extract the sound files
  checkSound(object) {
    if (!("prs" in object)) {
      return null;
    }
    return object.prs[0].sound.audio;
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
          pronounciation={this.checkPronounciation(dictionary.hwi)}
          sound={this.checkSound(dictionary.hwi)}
        />
        <Definition
          word={this.removeDuplicates(dictionary.meta.id)}
          definition={dictionary.def[0].sseq}
        />
        <OtherUsage
          word={this.removeDuplicates(dictionary.meta.id)}
          stem={dictionary.meta.stems}
        />
      </div>
    );
  }
}

export default WordItem;
