import React from "react";
import First from "./Routing/First";
import SecondPage from "./Routing/SecondPage";
import Third from "./Routing/Third";
import Fourth from "./Routing/Fourth";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

import Last from "./Routing/Last";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* this path will render in this url only */}
        <Route path="/First" element={<First />}></Route>
        <Route path="/Second" element={<SecondPage />}></Route>
        <Route path="/Third" element={<Third />}></Route>
        <Route path="/Fourth" element={<Fourth />}></Route>
        <Route path="/Last" element={<Last />}></Route>
      </Routes>
    </div>
  );
};

export default App;
