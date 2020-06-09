import React, { Component } from "react";
import DefinitionItems from "./DefinitionItems";
import "../../styles/Definition.css";

class Definition extends Component {
  render() {
    const { word, definition } = this.props;
    const definitionArray = definition.sseq;
    return (
      <div className="Definition">
        <h2 id="label">
          Definition of <span id="highlight">{word}</span>
        </h2>
        {definitionArray.map((definition, index) => (
          <DefinitionItems key={index} definition={definition} />
        ))}
      </div>
    );
  }
}

export default Definition;
