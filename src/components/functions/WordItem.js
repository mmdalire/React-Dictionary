import React from "react";
import MainWord from "./MainWord";
import Detailed from "./Detailed";
import Definition from "./Definition";
import OtherUsage from "./OtherUsage";
import "../../styles/WordItem.css";

const WordItem = (props) => {
  const removeDuplicates = (word) => {
    return word.includes(":") ? word.split(":")[0] : word;
  };

  const changeSyllableStyle = (syllable) => {
    return syllable.split("*").join("•");
  };

  //If there are no pronounciations listed, return nothing
  const checkPronounciation = (object) => {
    if (!("prs" in object)) {
      return {
        ...object,
        prs: [{ mw: "--" }],
      }.prs[0].mw;
    }
    return object.prs[0].mw;
  };

  //Extract the sound files
  const checkSound = (object) => {
    if (!("prs" in object)) {
      return null;
    }
    if (!("sound" in object.prs[0])) {
      return null;
    }
    return object.prs[0].sound.audio;
  };

  //Check if definition exists
  const checkDefinition = (object) => {
    if (!("def" in object)) {
      return [
        {
          sseq: [[["sense", { dt: [["text", "No definition assigned"]] }]]],
        },
      ][0].sseq;
    }
    return object.def[0].sseq;
  };

  const { dictionary, styles } = props;
  return (
    <div style={{ borderBottomColor: styles.color }} className="WordItem">
      <MainWord
        word={removeDuplicates(dictionary.meta.id)}
        figureOfSpeech={dictionary.fl}
        styles={styles}
      />
      <Detailed
        syllable={changeSyllableStyle(dictionary.hwi.hw)}
        pronounciation={checkPronounciation(dictionary.hwi)}
        sound={checkSound(dictionary.hwi)}
        offensive={dictionary.meta.offensive}
        styles={styles}
      />
      <Definition
        word={removeDuplicates(dictionary.meta.id)}
        definition={checkDefinition(dictionary)}
        styles={styles}
      />
      <OtherUsage
        word={removeDuplicates(dictionary.meta.id)}
        stem={dictionary.meta.stems}
        styles={styles}
      />
    </div>
  );
};

export default WordItem;
