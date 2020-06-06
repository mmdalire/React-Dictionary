import React, { Component } from "react";
import "../../styles/Definition.css";

class Definition extends Component {
  render() {
    const { word, definition } = this.props;
    console.log(definition[0].sseq);
    return (
      <div className="Definition">
        <h2 id="label">
          Definition of <span id="highlight">{word}</span>
        </h2>
      </div>
    );
  }
}

export default Definition;
