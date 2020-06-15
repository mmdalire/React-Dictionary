import React from "react";
import "../../styles/NoResultsFound.css";

const NoResultsFound = (props) => {
  const listRelatedWords = (list) => {
    if (list.length === 0) return <h3>No related words</h3>;
    return (
      <>
        <b>Try searching this/these instead:</b> {list.join(", ")}
      </>
    );
  };

  const { relatedWord, styles } = props;
  return (
    <div>
      <div
        style={{ color: styles.color, borderBottomColor: styles.color }}
        className="error-header"
      >
        Sorry, we couldn't find any definition for the word you're looking for.
      </div>
      <div style={{ color: styles.color }} className="related-words">
        {listRelatedWords(relatedWord)}
      </div>
    </div>
  );
};

export default NoResultsFound;
