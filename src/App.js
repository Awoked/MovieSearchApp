import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

import "./Assets/css/index.css";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/moviedetail">
            <Route path=":movieId" element={<MovieDetail />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
