import React, { Component } from "react";
import "../styles/FooterDetailed.css";

class FooterDetailed extends Component {
  changeColor(type) {
    const preset = {
      padding: "3px",
      borderRadius: "10px",
      textAlign: "center",
      width: "200px",
    };

    if (type === "Class component") {
      preset["backgroundColor"] = "var(--class-component-secondary)";
      preset["color"] = "var(--class-component-primary)";
    } else {
      preset["backgroundColor"] = "var(--function-component-secondary)";
      preset["color"] = "var(--function-component-primary)";
    }

    return preset;
  }

  render() {
    const { type, dateFrom, dateTo } = this.props;
    const styles = this.changeColor(type);

    return (
      <div className="FooterDetailed">
        <h4 style={styles}>{type}</h4>
        <h3>Date started: {dateFrom}</h3>
        <h3>Date ended: {dateTo}</h3>
      </div>
    );
  }
}

export default FooterDetailed;
