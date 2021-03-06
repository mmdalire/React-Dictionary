import React, { useState } from "react";
import Header from "../functions/Header";
import Input from "../functions/Input";
import Output from "../functions/Output";
import PoweredBy from "./PoweredBy";
import "../../styles/Dictionary.css";
import RandomWords from "../../randomWords.json";

const Dictionary = () => {
  const [dictionary, setDictionary] = useState([]);
  const [showRandomWords, setShowRandomWords] = useState(true);
  const [doneSearching, setDoneSearching] = useState(false);
  const styles = {
    backgroundColor: "var(--function-component-secondary)",
    color: "var(--function-component-primary)",
  };

  const searchKeywordHandler = (word) => {
    const baseUrl = "/.netlify/functions/get_words?";
    const searchWord = `word=${word}`;
    const URL = `${baseUrl}${searchWord}`;

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
        randomWords={RandomWords}
        showRandomWords={showRandomWords}
        doneSearching={doneSearching}
      />
      <PoweredBy styles={styles} />
    </div>
  );
};

export default Dictionary;
