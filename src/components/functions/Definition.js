import React from "react";
import DefinitionItems from "./DefinitionItems";
import "../../styles/Definition.css";

const Definition = (props) => {
  const { word, definition, styles } = props;
  return (
    <div className="Definition">
      <h2 style={{ color: styles.color }} className="label">
        Definition of <span id="highlight">{word}</span>
      </h2>
      {definition.map((definition, index) => (
        <DefinitionItems key={index} styles={styles} definition={definition} />
      ))}
    </div>
  );
};

export default Definition;
