import React, { useState } from "react";
import "../../styles/Input.css";

const Input = (props) => {
  const { styles } = props;
  const [word, setWord] = useState("");

  const handleInput = (e) => {
    setWord(e.target.value);
  };

  const isInputEmpty = () => {
    return word ? false : true;
  };

  const searchKeyword = (word, showRandomWords, doneSearching) => {
    props.searchKeywordHandler(word);
    props.toggleRandomHandler(showRandomWords);
    props.doneSearchingHandler(doneSearching);
    setWord("");
  };

  return (
    <div className="Input">
      <div>
        <i
          className="fas fa-search"
          style={{ color: styles.color }}
          id="search-logo"
        ></i>
        <input
          type="text"
          style={{ borderBottomColor: styles.color }}
          placeholder="Search keyword"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <button
        id="submit"
        style={{ borderColor: styles.color, color: styles.color }}
        onClick={() => searchKeyword(word, isInputEmpty(), false)}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
