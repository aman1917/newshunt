import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsCom from "./components/NewsCom";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewsCom />
      </div>
    );
  }
}

export default App;
