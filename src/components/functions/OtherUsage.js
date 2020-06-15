import React from "react";
import "../../styles/OtherUsage.css";

const OtherUsage = (props) => {
  const { word, stem, styles } = props;
  return (
    <div
      style={{ backgroundColor: styles.color, color: styles.backgroundColor }}
      className="OtherUsage"
    >
      <h2 style={{ color: styles.backgroundColor }}>
        Other usages of <span id="highlight">{word}</span>
      </h2>
      <p>{stem.join(", ")}</p>
    </div>
  );
};

export default OtherUsage;
