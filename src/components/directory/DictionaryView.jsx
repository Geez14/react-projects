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
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  function toggle(name) {
    setDisplayCurrentChild((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
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
            {displayCurrentChild[item.name] ? (
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
      displayCurrentChild[item.name] ? (
        <ListUnpack items={item.children} />
      ) : null}
    </li>
  );
}
