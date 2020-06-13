import React, { Component } from "react";
import "../../styles/NoResultsFound.css";

class NoResultsFound extends Component {
  listRelatedWords(list) {
    if (list.length === 0) return <h3>No related words</h3>;
    return (
      <>
        <b>Try searching this/these instead:</b> {list.join(", ")}
      </>
    );
  }

  render() {
    const { relatedWord, styles } = this.props;
    return (
      <div>
        <div
          style={{ color: styles.color, borderBottomColor: styles.color }}
          className="error-header"
        >
          Sorry, we couldn't find any definition for the word you're looking
          for.
        </div>
        <div style={{ color: styles.color }} className="related-words">
          {this.listRelatedWords(relatedWord)}
        </div>
      </div>
    );
  }
}

export default NoResultsFound;
