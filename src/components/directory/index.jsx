import React from "react";
import ListUnpack from "./ListUnpack";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <ListUnpack items={menus} />
    </div>
  );
}
