import React from "react";
import "../../styles/PoweredBy.css";

const PoweredBy = (props) => {
  const { styles } = props;
  return (
    <div style={{ color: styles.color }} className="PoweredBy">
      <h3>
        Powered by:{" "}
        <a
          style={{ color: styles.color }}
          href="https://dictionaryapi.com/"
          target="_blank"
          rel="noopener norefferer"
        >
          Merriam-Webster Dictionary API
        </a>
      </h3>
    </div>
  );
};

export default PoweredBy;
