import React from "react";
import Navbar from "./Navbar";
import TrendingToday from "./TrendingToday";
import MainSection from "./MainSection";
import Aside from "./Aside";

function App() {
  return (
    <>
      <Navbar />
      <TrendingToday />
      <div className="main-section-and-sidebar">
        <MainSection />
        <Aside />
      </div>
    </>
  );
}

export default App;
