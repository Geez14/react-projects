import React from "react";
import { FaFolderOpen, FaFolder, FaFile } from "react-icons/fa";
import { useState } from "react";
import ListUnpack from "./ListUnpack";

export default function Dictionary({ item }) {
  // dictionary for each directory!
  /**
   * Root:false/true
   * Photos:false/true
   */
  const [displayCurrentChild, setDisplayCurrentChild] = useState(new Map());

  function toggle(name) {
    setDisplayCurrentChild((prevState) => {
      const updatedState = new Map(prevState);
      if (updatedState.has(name)) {
        updatedState.delete(name); // Remove state to free memory
      } else {
        updatedState.set(name, true); // Only store opened folders
      }
      return updatedState;
    });
    // setDisplayCurrentChild((prevState) => ({
    //   ...prevState,
    //   [name]: !prevState[name],
    // }));
  }
  return (
    <li>
      <div className="menue-item">
        {item.children && item.children.length ? (
          <span
            onClick={() => {
              toggle(item.name);
            }}
          >
            {displayCurrentChild.get(item.name) ?? false ? (
              <FaFolderOpen className="folder" color="#fff" />
            ) : (
              <FaFolder className="folder" color="#fff" />
            )}
          </span>
        ) : (
          <span
            onClick={() => {
              alert(`file: ${item.name}, size: ${item.size}bytes`);
            }}
          >
            <FaFile className="file" color="#fff" />
          </span>
        )}
        <p>{item.name}</p>
      </div>
      {item.children &&
      item.children.length > 0 &&
      (displayCurrentChild.get(item.name) ?? false) ? (
        <ListUnpack items={item.children} />
      ) : null}
    </li>
  );
}
