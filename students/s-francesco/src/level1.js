/**
 * Level 1 - Basic Functions
 * Student: s-student4
 */

// --- Function 1 ---
function isPalindrome(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

// --- Function 2 ---
function sumEvenNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}

// --- Function 3 ---
function repeatString(str, times) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  if (typeof times !== 'number' || times < 0) throw new Error('Times must be a non-negative number');
  return str.repeat(times);
}

module.exports = { isPalindrome, sumEvenNumbers, repeatString };
