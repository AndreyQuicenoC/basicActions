/**
 * Level 1 - Basic Functions
 * Student: s-student3
 */

// --- Function 1 ---
function countConsonants(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return consonants ? consonants.length : 0;
}

// --- Function 2 ---
function factorial(n) {
  if (typeof n !== 'number' || n < 0) throw new Error('Input must be a non-negative number');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// --- Function 3 ---
function findIndexOf(arr, element) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  return arr.indexOf(element);
}

module.exports = { countConsonants, factorial, findIndexOf };
