import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsCom from "./components/NewsCom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 15;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color="green"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsCom
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
