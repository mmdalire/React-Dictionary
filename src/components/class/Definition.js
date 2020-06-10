import React, { Component } from "react";
import DefinitionItems from "./DefinitionItems";
import "../../styles/Definition.css";

class Definition extends Component {
  render() {
    const { word, definition } = this.props;
    return (
      <div className="Definition">
        <h2 className="label">
          Definition of <span id="highlight">{word}</span>
        </h2>
        {definition.map((definition, index) => (
          <DefinitionItems key={index} definition={definition} />
        ))}
      </div>
    );
  }
}

export default Definition;
