import React from "react";

export default function MyButton({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}