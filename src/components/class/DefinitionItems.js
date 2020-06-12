import React, { Component } from "react";
import "../../styles/DefinitionItems.css";

class DefinitionItems extends Component {
  //Getting the exact data inside super nested objects and arrays
  cleanDefinitions(wordObject) {
    //If the object inside is inside an array, retrive the specific definition
    if (wordObject.length !== undefined) {
      if (wordObject.length >= 2) {
        return wordObject[1][1].dt[0][1];
      }
    }
    //If no definition exists for that word, return the label
    if ("lbs" in wordObject) {
      return wordObject.lbs[0];
    }

    //If no dt exists
    if (!("dt" in wordObject)) {
      //If it has an alternate definition
      if ("sense" in wordObject) {
        return wordObject.sense.dt[0][1];
      }
      //If it is a slang term
      return `{[${wordObject.sls}]}`;
    }

    //Retrieve definition with the keyword 'text' in the array
    if (wordObject.dt[0][0] !== "text") {
      return wordObject.dt[0][1][0][0][1];
    }
    return wordObject.dt[0][1];
  }

  getTokensInString(word) {
    const dictionaryTokenList = [];
    let token = "";
    let braces = false;

    //Detects token by finding the opening and closing braces including the words inside them
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "{" && braces === false) {
        token += word[i];
        braces = true;
        continue;
      }
      if (braces === true) {
        if (word[i] === "}") {
          token += word[i];
          braces = false;
          dictionaryTokenList.push(token);
          token = "";
          continue;
        }
        token += word[i];
        continue;
      }
    }

    //Return array without any duplicate tokens
    return dictionaryTokenList.filter(
      (token, index) => dictionaryTokenList.indexOf(token) === index
    );
  }

  getStringsInTokenList(tokens) {
    //In special tokens, retrieve meaningful words inside them
    const wordsFound = [];
    const slangFound = [];
    tokens.forEach((token) => {
      if (token.includes("|")) {
        wordsFound.push(token.split("|")[1]);
      }
      if (token.includes("[")) {
        slangFound.push(token.split("[")[1].split("]")[0]);
      }
    });
    return [wordsFound, slangFound];
  }

  getText(original) {
    //When no definition exists
    if (original === "No definition assigned") {
      return (
        <b>
          <i>{original}</i>
        </b>
      );
    }

    const dictionaryTokenList = this.getTokensInString(original);
    const wordsTokenList = this.getStringsInTokenList(dictionaryTokenList);

    //Remove all tokens in the data
    dictionaryTokenList.forEach(
      (token) => (original = original.split(token).join("").trim())
    );

    //Return filtered strings
    //If slang is the only thing returned
    if (wordsTokenList[1].length !== 0) {
      return (
        <>
          <b>Slang used in / for: </b>
          <i>{wordsTokenList[1].join(", ")}</i>
        </>
      );
    }
    //When no string is left due to filtering, place the words inside the special tokens
    return original.length <= 1 ? (
      <>
        <b>Search for: </b>
        <i>{wordsTokenList[0].join(", ")}</i>
      </>
    ) : (
      original.slice(0, 1).toUpperCase() + original.slice(1)
    );
  }

  render() {
    const { definition } = this.props;
    const shortenedDefinition = this.cleanDefinitions(definition[0][1]);
    const getText = this.getText(shortenedDefinition);

    return <li>{getText}</li>;
  }
}

export default DefinitionItems;
