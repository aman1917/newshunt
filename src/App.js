import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsCom from "./components/NewsCom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsCom
                  key="general"
                  country="in"
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsCom
                  key="business"
                  country="in"
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsCom
                  key="entertainment"
                  country="in"
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsCom
                  key="health"
                  country="in"
                  pageSize={this.pageSize}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsCom
                  key="science"
                  country="in"
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsCom
                  key="sports"
                  country="in"
                  pageSize={this.pageSize}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsCom
                  key="technology"
                  country="in"
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
