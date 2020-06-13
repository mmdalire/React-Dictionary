import React, { Component } from "react";
import WordItem from "./WordItem";
import NoResultsFound from "./NoResultsFound";
import RandomWord from "./RandomWord";
import Loading from "./Loading";
import "../../styles/Output.css";

class Output extends Component {
  //Check if the searched word is in the dictionary
  doOutputResults(data) {
    if (data.length === 0) return false;
    if (data[0].meta) return true;
    return false;
  }

  render() {
    const {
      dictionary,
      randomWords,
      showRandomWords,
      doneSearching,
    } = this.props;
    const output = this.doOutputResults(dictionary);
    return (
      <div className="Output">
        {showRandomWords ? (
          <RandomWord randomWords={randomWords} />
        ) : (
          <>
            {output ? (
              dictionary.map((word) => (
                <WordItem key={word.meta.id} dictionary={word} />
              ))
            ) : doneSearching ? (
              <NoResultsFound relatedWord={dictionary} />
            ) : (
              <Loading />
            )}
          </>
        )}
      </div>
    );
  }
}

export default Output;
