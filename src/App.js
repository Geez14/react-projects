import React from "react";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColorCard from "./components/hexcolor";
import List from "./components/listview";
import StartMetric from "./components/stars";
import ImageCrusole from "./components/image-crusole";
import DynamicLoad from "./components/dynamic-api-fetch";
import menus from "./components/directory/data.js";
import TreeView from "./components/directory";

const offset = Math.floor(Math.random() * 120);
const limit = 10;

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* RandomColorCard component */}
      <RandomColorCard />
      <List />
      {/* aria-label is for narrator */}
      {/* <button aria-label="Close the modal">Close</button> */}

      <h1>StartMetric</h1>
      <StartMetric />
      <h1>Image Crusole!</h1>
      <ImageCrusole
        url={"https://api.slingacademy.com/v1/sample-data/photos"}
        offset={offset}
        limit={limit}
      />
      <h1>DynamicLoading</h1>
      <DynamicLoad
        url={"https://dummyjson.com/products"}
        limit={4}
        max_fetch={5}
      />
      <h1>Directory view!</h1>
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
