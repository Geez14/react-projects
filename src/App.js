import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColorCard from "./components/hexcolor";
import List from "./components/listview";
import StartMetric from "./components/stars";
import ImageCrusole from "./components/image-crusole";

function App() {
  return (
    <div className="App">
      <script src="http://localhost:8097"></script>
      {/* Accordian component */}
      <Accordian />
      {/* RandomColorCard component */}
      <RandomColorCard />
      <List />
      {/* aria-label is for narrator */}
      {/* <button aria-label="Close the modal">Close</button> */}
      {/* StartMetric */}
      <StartMetric />
      {/* Image Crusole! */}
      <ImageCrusole
        url={"https://api.slingacademy.com/v1/sample-data/photos"}
        offset={0}
        limit={"10"}
      />
    </div>
  );
}

export default App;
