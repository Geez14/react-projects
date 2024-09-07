import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColorCard from "./components/hexcolor";
import List from "./components/listview";
import { Copy } from "./components/copy-on-click";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* RandomColorCard component */}
      <RandomColorCard />
      <List />
      <Copy></Copy>
    </div>
  );
}

export default App;
