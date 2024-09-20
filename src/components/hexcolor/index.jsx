import React from "react";
import MyButton from "../button";
import { useState, useEffect, useCallback } from "react";
import { generateHex, generateRGB, genericConvertor } from "./util.js";

export default function RandomColorCard() {
  const [type_of_color, set_type_of_color] = useState("hex");
  const [color, set_color] = useState("#000000");

  // this run when the dependencies have change in value

  useEffect(() => {
    set_color((prev) => genericConvertor(prev, type_of_color));
  }, [type_of_color]);

  const card = (
    <div style={{ width: "100dvw", height: "100dvh", backgroundColor: color }}>
      <MyButton onClick={() => set_type_of_color("hex")} name="Hex Mode" />
      <MyButton onClick={() => set_type_of_color("rgb")} name="RGB Mode" />

      {/* variant 1 passing the function! */}
      <MyButton
        onClick={() => {
          type_of_color === "hex"
            ? set_color(generateHex())
            : set_color(generateRGB());
        }}
        name="Generate!"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20xp",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          marginTop: "50px",
          textShadow: "0 0 2.5px black",
        }}
      >
        <h2>{type_of_color === "hex" ? "HEX value " : "RGB value "}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
  return card;
}
