import React, { Component } from "react";
import DefinitionItems from "./DefinitionItems";
import "../../styles/Definition.css";

class Definition extends Component {
  render() {
    const { word, definition, styles } = this.props;
    return (
      <div className="Definition">
        <h2 style={{ color: styles.color }} className="label">
          Definition of <span id="highlight">{word}</span>
        </h2>
        {definition.map((definition, index) => (
          <DefinitionItems
            key={index}
            styles={styles}
            definition={definition}
          />
        ))}
      </div>
    );
  }
}

export default Definition;
