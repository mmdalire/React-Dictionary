import React, { Component } from "react";
import Dictionary from "./components/class/Dictionary"; //For class component
//import Dictionary from "./components/functions/Dictionary"; //FOr function component
import Footer from "./components/Footer";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div class="App">
        <div className="container">
          <Dictionary />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
