import React from "react";
import Dictionary from "./DictionaryView";
import "./styles.css";
export default function ListUnpack({ items = [] }) {
  return (
    <ul className="menu-list-container">
      {items && items.length > 0
        ? items.map((item, index) => <Dictionary key={index} item={item} />)
        : "?"}
    </ul>
  );
}
