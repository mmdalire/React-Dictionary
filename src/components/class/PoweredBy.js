import React, { Component } from "react";
import "../../styles/PoweredBy.css";

class PoweredBy extends Component {
  render() {
    return (
      <div className="PoweredBy">
        <h3>
          Powered by:{" "}
          <a
            href="https://dictionaryapi.com/"
            target="_blank"
            rel="noopener norefferer"
          >
            Merriam-Webster Dictionary API
          </a>
        </h3>
      </div>
    );
  }
}

export default PoweredBy;
