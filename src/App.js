import React, { Component } from "react";
import Dictionary from "./components/class/Dictionary"; //For class component, uncomment this line
import Footer from "./components/Footer";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <Dictionary />
        <Footer />
      </>
    );
  }
}

export default App;
