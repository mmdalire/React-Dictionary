import React, { Component } from "react";
import "../../styles/Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <h1 id="loading-message">Loading...</h1>
      </div>
    );
  }
}

export default Loading;
