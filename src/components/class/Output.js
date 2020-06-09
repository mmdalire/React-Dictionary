import React, { Component } from "react";
import WordItem from "./WordItem";
import "../../styles/Output.css";

class Output extends Component {
  render() {
    const { dictionary } = this.props;

    return (
      <div className="Output">
        {dictionary.map((word) => (
          <WordItem key={word.meta.id} dictionary={word} />
        ))}
      </div>
    );
  }
}

export default Output;
