import React, { Component } from "react";
import "../../styles/Detailed.css";

class Detailed extends Component {
  //Get the subdirectory based on characters
  getSubdirectory(file) {
    if (file.slice(0, 3) === "bix") return "bix";
    if (file.slice(0, 2) === "gg") return "gg";
    if (file[0].match(new RegExp("\\d"))) return "number";
    if (file[0].match(new RegExp("\\W|[_]"))) return "number";
    return file[0];
  }

  //Get the sound link for source
  getSoundUrl(file) {
    if (file === null) return ["", true]; //Return when no sound object

    const baseUrl = "https://media.merriam-webster.com/audio/prons/en/us/mp3/";
    const subdirectory = `${this.getSubdirectory(file)}/`;
    const fileName = file;
    const fileExtension = "mp3";
    return [`${baseUrl}${subdirectory}${fileName}.${fileExtension}`, false]; //Retrieve the sound url
  }

  //Play audio when button is clicked
  playAudio(audio) {
    const play = new Audio(audio);
    play.play();
  }

  render() {
    const { syllable, pronounciation, sound, offensive, styles } = this.props;
    const soundUrl = this.getSoundUrl(sound);
    return (
      <div style={{ color: styles.color }} className="Detailed">
        <small style={{ borderRightColor: styles.color }} id="syllable">
          {syllable}
        </small>
        <small id="pronounciation">{pronounciation}</small>
        <button
          id="pronounciation-sound"
          disabled={soundUrl[1]}
          onClick={() => this.playAudio(soundUrl[0])}
        >
          <i
            style={{ color: styles.color }}
            className="fas fa-volume-up"
            id="speaker"
          ></i>
        </button>
        {offensive ? <small id="offensive">Offensive</small> : ""}
      </div>
    );
  }
}

export default Detailed;
