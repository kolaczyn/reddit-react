import React from "react";
import Navbar from "./Navbar";
import TrendingToday from "./TrendingToday";
import Main from "./Main";
import Aside from "./Aside";

function App() {
  return (
    <>
      <Navbar />
      <TrendingToday />
      <div className="main-section-and-sidebar">
        <Main />
        <Aside />
      </div>
    </>
  );
}

export default App;
