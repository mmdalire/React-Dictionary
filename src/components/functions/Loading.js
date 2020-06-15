import React from "react";
import "../../styles/Loading.css";

const Loading = (props) => {
  const { styles } = props;
  return (
    <div className="Loading">
      <h1 style={{ color: styles.color }} id="loading-message">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
