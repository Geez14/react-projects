import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColorCard from "./components/hexcolor";
import List from "./components/listview";
// import ClipboardExample from "./components/copy-on-click";
import StartMetric from "./components/stars";

function App() {
  return (
    <div className="App">
      <script src="http://localhost:8097"></script>
      {/* Accordian component */}
      <Accordian />
      {/* RandomColorCard component */}
      <RandomColorCard />
      <List />
      {/* <ClipboardExample /> */}
      {/* aria-label is for narrator */}
      {/* <button aria-label="Close the modal">Close</button> */}
      {/* StartMetric */}
      <StartMetric />
    </div>
  );
}

export default App;
