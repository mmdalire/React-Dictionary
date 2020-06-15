import React, { useState, useEffect } from "react";
import Header from "../functions/Header";
import Input from "../functions/Input";
import Output from "../functions/Output";
import PoweredBy from "./PoweredBy";
import "../../styles/Dictionary.css";
import RandomWords from "../../randomWords.json";

const Dictionary = () => {
  const [dictionary, setDictionary] = useState([]);
  const [randomWords, setRandomWords] = useState(RandomWords);
  const [showRandomWords, setShowRandomWords] = useState(true);
  const [doneSearching, setDoneSearching] = useState(false);
  const [styles, setStyles] = useState({
    backgroundColor: "var(--function-component-secondary)",
    color: "var(--function-component-primary)",
  });

  const searchKeywordHandler = (word) => {
    const BASE_URL =
      "https://dictionaryapi.com/api/v3/references/collegiate/json/";
    const API_KEY = `key=${process.env.REACT_APP_DICTIONARY_KEY}`;
    const URL = `${BASE_URL}${word}?${API_KEY}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
        setDoneSearching(true);
      })
      .catch((error) => console.log(error));
  };

  const toggleRandomHandler = (status) => {
    setDictionary([]);
    setShowRandomWords(status);
  };

  const doneSearchingHandler = (reset) => {
    setDoneSearching(false);
  };

  return (
    <div className="Dictionary">
      <Header styles={styles} />
      <Input
        styles={styles}
        searchKeywordHandler={searchKeywordHandler}
        toggleRandomHandler={toggleRandomHandler}
        doneSearchingHandler={doneSearchingHandler}
      />
      <Output
        styles={styles}
        dictionary={dictionary}
        randomWords={randomWords}
        showRandomWords={showRandomWords}
        doneSearching={doneSearching}
      />
      <PoweredBy styles={styles} />
    </div>
  );
};

export default Dictionary;
