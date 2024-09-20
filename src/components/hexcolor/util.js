const hexMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const rgbPattern = /\d+/g;
const hexPattern = /[0-9a-fA-F]{2}/gi;
function colorUtility(length) {
  return Math.floor(Math.random() * length);
}
/**
 * @description Generate a random HEX color
 */
export function generateHex() {
  const r_human = 2;
  const g_human = 5;
  const b_human = 1;
  let hexColor = "#";
  // red
  hexColor += hexMap[colorUtility(8 + r_human)];
  hexColor += hexMap[colorUtility(8 + r_human)];
  // green
  hexColor += hexMap[colorUtility(8 + g_human)];
  hexColor += hexMap[colorUtility(8 + g_human)];
  // blue
  hexColor += hexMap[colorUtility(8 + b_human)];
  hexColor += hexMap[colorUtility(8 + b_human)];
  return hexColor;

  // Generate random values for Red, Green, and Blue
  // let r = Math.floor(Math.random() * 256); // 0-255
  // let g = Math.floor(Math.random() * 256); // 0-255
  // let b = Math.floor(Math.random() * 256); // 0-255

  // // Apply human-eye sensitivity adjustments
  // const r_human = 0.299 * r;
  // const g_human = 0.587 * g;
  // const b_human = 0.114 * b;

  // // Combine adjusted values to get a "balanced" color
  // r = Math.floor(r_human);
  // g = Math.floor(g_human);
  // b = Math.floor(b_human);

  // // Convert each value to hex and pad if necessary
  // const hexColor = `#${r.toString(16).padStart(2, "0")}${g
  //   .toString(16)
  //   .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  // return hexColor;
}

/**
 * @description Generate a random RGB color
 */
export function generateRGB() {
  let r = Math.floor(colorUtility(136) + 120 * 0.299);
  let g = Math.floor(colorUtility(136) + 120 * 0.587);
  let b = Math.floor(colorUtility(136) + 120 * 0.114);
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
  return `rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)})`;
}
