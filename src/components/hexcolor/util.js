const hexMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const rgbPattern = /\d+/g;
const hexPattern = /[0-9a-fA-F]{2}/gi;
function colorUtility(length) {
  return Math.floor(Math.random() * length);
}
/**
 * @description Generate a random HEX color
 */
export function generateHex() {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    hexColor += hexMap[colorUtility(hexMap.length)];
  }
  return hexColor;
}

/**
 * @description Generate a random RGB color
 */
export function generateRGB() {
  let r = colorUtility(256);
  let g = colorUtility(256);
  let b = colorUtility(256);
  return `rgb(${r},${g},${b})`;
}

/**
 * @description Convert a color to another color format
 * @param {string} color - The color to convertA
 * @param {string} to - The color format to convert to
 */

export function genericConvertor(color, to) {
  // convert the hex to rgb
  if (color.startsWith("#") && to === "rgb") {
    return toRGB(color);
  }
  // convert the rgb to hex
  else if (color.startsWith("rgb") && to === "hex") {
    return toHex(color);
  } else {
    return color;
  }
}

// ---------------------------- Non-exportable-Functions ----------------------------
function PaddedHex(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice("1");
  }
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((i) => "0" + i)
      .join("");
  } else if (hex.length === 4) {
    hex =
      hex[0] +
      hex[1] +
      hex
        .slice(2)
        .split("")
        .map((i) => "0" + i)
        .join("");
  } else if (hex.length === 5) {
    hex = hex[0] + hex[1] + hex[2] + hex[3] + "0" + hex[4];
  }
  return hex;
}

function toHex(rgb) {
  let [r, g, b] = rgb.match(rgbPattern);
  console.log(rgb, "-to->[", r, g, b, "]");
  return (
    "#" +
    (parseInt(r).toString(16) +
      parseInt(g).toString(16) +
      parseInt(b).toString(16))
  );
}

function toRGB(hex) {
  hex = hex.slice(1);
  hex = PaddedHex(hex);
  let [r, g, b] = hex.match(hexPattern);
  console.log(hex, "-to->[", r, g, b, "]");
  return `rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)})`;
}
