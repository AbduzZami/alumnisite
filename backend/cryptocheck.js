const crypto = require("crypto");

function stringToHex(str) {
  const buffer = Buffer.from(str, "utf8");
  return buffer.toString("hex");
}

const randomHexBefore = crypto.randomBytes(4).toString("hex");
const randomHexAfter = crypto.randomBytes(8).toString("hex");

const inputString = "https://youtu.be/9FMcX8Lqu1g";
const hexString = stringToHex(inputString);
console.log(hexString);
console.log(hexString.substring(0, 28));
console.log(hexString.substring(28, 56));

// return the below string
console.log(
  randomHexBefore +
    hexString.substring(0, 28) +
    randomHexAfter +
    hexString.substring(28, 56)
);
