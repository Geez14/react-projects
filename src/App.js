import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColorCard from "./components/hexcolor";
import List from "./components/listview";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* RandomColorCard component */}
      <RandomColorCard />

      <List />
    </div>
  );
}

export default App;
