// const data = [{ 1: 34, 2: 45 }, { 4: 34 }, { 398324: 498749387598347 }];
// data.map((item, index) => {
//   console.log(item, index);
// });

// function PaddedHex(hex) {
//   if (hex.startsWith("#")) {
//     hex = hex.slice("1");
//   }
//   if (hex.length === 3) {
//     hex = hex
//       .split("")
//       .map((i) => "0" + i)
//       .join("");
//   } else if (hex.length === 4) {
//     hex =
//       hex[0] +
//       hex[1] +
//       hex
//         .slice(2)
//         .split("")
//         .map((i) => "0" + i)
//         .join("");
//   } else if (hex.length === 5) {
//     hex = hex[0] + hex[1] + hex[2] + hex[3] + "0" + hex[4];
//   }
//   return hex;
// }

// function toHex(rgb) {
//   let [r, g, b] = rgb.match(/[0-9]{1,3}/g);
//   console.log(r, g, b);
//   return (
//     "#" +
//     (parseInt(r).toString(16) +
//       parseInt(g).toString(16) +
//       parseInt(b).toString(16))
//   );
// }
// function toRGB(hex) {
//   hex = hex.slice(1);
//   hex = PaddedHex(hex);
//   let [r, g, b] = hex.match(/[0-9A-F]{2}/gi);
//   return `rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)})`;
// }

// const val = "rgb(1,2,4)";
// let val2 = "";
// val2 = toHex(val);
// console.log(val2);
// console.log(toRGB(val2));
