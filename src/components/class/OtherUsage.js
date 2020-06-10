import React, { Component } from "react";
import "../../styles/OtherUsage.css";

class OtherUsage extends Component {
  render() {
    const { word, stem } = this.props;
    return (
      <div className="OtherUsage">
        <h2 className="label">
          Other usages of <span id="highlight">{word}</span>
        </h2>
        <p>{stem.join(", ")}</p>
      </div>
    );
  }
}

export default OtherUsage;
