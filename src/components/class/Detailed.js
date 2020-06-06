import React, { Component } from "react";
import "../../styles/Detailed.css";

class Detailed extends Component {
  render() {
    const { syllable, pronounciation } = this.props;
    return (
      <div className="Detailed">
        <small id="syllable">{syllable}</small>
        <small id="pronounciation">{pronounciation}</small>
        <button id="pronounciation-sound">
          <i className="fas fa-volume-up" id="speaker"></i>
        </button>
      </div>
    );
  }
}

export default Detailed;
