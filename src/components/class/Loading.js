import React, { Component } from "react";
import "../../styles/Loading.css";

class Loading extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className="Loading">
        <h1 style={{ color: styles.color }} id="loading-message">
          Loading...
        </h1>
      </div>
    );
  }
}

export default Loading;
