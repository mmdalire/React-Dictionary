import React, { Component } from "react";
import MainWord from "./MainWord";
import Detailed from "./Detailed";
import Definition from "./Definition";
import "../../styles/Output.css";

class Output extends Component {
  changeSyllableStyle(syllable) {
    return syllable.split("*").join("•");
  }

  render() {
    const { dictionary } = this.props;

    return (
      <div className="Output">
        <MainWord word={dictionary.meta.id} figureOfSpeech={dictionary.fl} />
        <Detailed
          syllable={this.changeSyllableStyle(dictionary.hwi.hw)}
          pronounciation={dictionary.hwi.prs[0].mw}
        />
        <Definition word={dictionary.meta.id} definition={dictionary.def} />
      </div>
    );
  }
}

export default Output;
