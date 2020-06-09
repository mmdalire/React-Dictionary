import React, { Component } from "react";
import "../../styles/DefinitionItems.css";

class DefinitionItems extends Component {
  cleanDefinitions(wordObject) {
    //Getting the exact data inside super nested objects and arrays
    if (wordObject.length !== undefined) {
      if (wordObject.length >= 2) {
        return wordObject[1][1].dt[0][1];
      }
      return wordObject;
    }
    return wordObject.dt[0][1];
  }

  getTokensInString(word) {
    const tokenList = [];
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
          tokenList.push(token);
          token = "";
          continue;
        }
        token += word[i];
        continue;
      }
    }

    //Return array without any duplicate tokens
    return tokenList.filter(
      (token, index) => tokenList.indexOf(token) === index
    );
  }

  getStringsInTokenList(tokens) {
    //In special tokens, retrieve meaningful words inside them
    const wordsFound = [];
    tokens.forEach((token) => {
      if (token.includes("|")) {
        wordsFound.push(token.split("|")[1]);
      }
    });
    return wordsFound;
  }

  getText(original) {
    const tokenList = this.getTokensInString(original);
    const wordsTokenList = this.getStringsInTokenList(tokenList);

    //Remove all tokens in the data
    tokenList.forEach(
      (token) => (original = original.split(token).join("").trim())
    );

    //Return filtered strings
    //When no string is left due to filtering, place the words inside the special tokens
    return original.length <= 1
      ? [wordsTokenList.join(", "), true]
      : original.toString();
  }

  toggleSpecialFormat(results) {
    if (results[1] === true) {
      return {
        backgroundColor: "var(--class-component-primary)",
        color: "var(--class-component-secondary)",
        padding: "2px",
      };
    }
    return null;
  }

  render() {
    const { definition } = this.props;
    const shortenedDefinition = this.cleanDefinitions(definition[0][1]);
    const getText = this.getText(shortenedDefinition);
    const doToggleSpecialFormat = this.toggleSpecialFormat(getText);

    return <li style={doToggleSpecialFormat}>{getText}</li>;
  }
}

export default DefinitionItems;
