import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NewsCom from "./components/NewsCom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color="green"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                country="in"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                country="in"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                country="in"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                country="in"
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                country="in"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                country="in"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsCom
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                country="in"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
