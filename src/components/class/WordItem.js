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
    if (!("sound" in object.prs[0])) {
      return null;
    }
    return object.prs[0].sound.audio;
  }

  //Check if definition exists
  checkDefinition(object) {
    if (!("def" in object)) {
      return [
        {
          sseq: [[["sense", { dt: [["text", "No definition assigned"]] }]]],
        },
      ][0].sseq;
    }
    return object.def[0].sseq;
  }

  render() {
    const { dictionary, styles } = this.props;
    return (
      <div style={{ borderBottomColor: styles.color }} className="WordItem">
        <MainWord
          word={this.removeDuplicates(dictionary.meta.id)}
          figureOfSpeech={dictionary.fl}
          styles={styles}
        />
        <Detailed
          syllable={this.changeSyllableStyle(dictionary.hwi.hw)}
          pronounciation={this.checkPronounciation(dictionary.hwi)}
          sound={this.checkSound(dictionary.hwi)}
          offensive={dictionary.meta.offensive}
          styles={styles}
        />
        <Definition
          word={this.removeDuplicates(dictionary.meta.id)}
          definition={this.checkDefinition(dictionary)}
          styles={styles}
        />
        <OtherUsage
          word={this.removeDuplicates(dictionary.meta.id)}
          stem={dictionary.meta.stems}
          styles={styles}
        />
      </div>
    );
  }
}

export default WordItem;
