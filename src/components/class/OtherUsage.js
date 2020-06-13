import React, { Component } from "react";
import "../../styles/OtherUsage.css";

class OtherUsage extends Component {
  render() {
    const { word, stem, styles } = this.props;
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
  }
}

export default OtherUsage;
