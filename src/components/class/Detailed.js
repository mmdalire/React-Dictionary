import React, { Component } from "react";
import "../../styles/Detailed.css";

class Detailed extends Component {
  render() {
    const { syllable, pronounciation, sound } = this.props;
    return (
      <div className="Detailed">
        <small id="syllable">{syllable}</small>
        <small id="pronounciation">{pronounciation}</small>

        <audio id="play-audio">
          <source />
        </audio>
        <button id="pronounciation-sound">
          <i className="fas fa-volume-up" id="speaker"></i>
        </button>
      </div>
    );
  }
}

export default Detailed;
