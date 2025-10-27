// --- Function 1 ---
function alternateCase(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  let result = "";
  let uppercase = true;
  for (const char of str) {
    if (char.match(/[a-z]/i)) {
      result += uppercase ? char.toUpperCase() : char.toLowerCase();
      uppercase = !uppercase;
    } else {
      result += char;
    }
  }
  return result;
}

// --- Function 2 ---
function productOfArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.reduce((product, num) => product * num, 1);
}

// --- Function 3 ---
function filterNegatives(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.filter((num) => num >= 0);
}

module.exports = { alternateCase, productOfArray, filterNegatives };
