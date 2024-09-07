import React from "react";

export function Copy({ children, onClick, ref }) {
  return (
    <button onClick={onClick}>
      {console.log("child", children, "click", onClick, "ref", ref)}
      {children}
    </button>
  );
}
