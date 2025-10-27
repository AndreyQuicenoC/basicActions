/**
 * Level 1 - Basic Functions
 * Student: s-jonathan
 *
 * This module contains three beginner-level utilities:
 * - reverseString: reverse a given string
 * - isEven: check if an integer number is even
 * - removeDuplicates: remove duplicate elements from an array while preserving order
 *
 * Each function includes basic input validation and clear error messages.
 */

const ERR = {
  STR: 'Input must be a string',
  NUM: 'Input must be a number',
  INT: 'Input must be an integer',
  ARR: 'Input must be an array',
};

/**
 * Reverses the provided string.
 *
 * Algorithm:
 * 1. Validate input is a string
 * 2. Split into characters, reverse, and join
 *
 * Complexity: O(n) time, O(n) space
 *
 * @param {string} str - Any text
 * @returns {string} The reversed text
 * @throws {Error} If str is not a string
 */
function reverseString(str) {
  if (typeof str !== 'string') throw new Error(ERR.STR);
  return str.split('').reverse().join('');
}

/**
 * Checks whether a number is even.
 *
 * Rules:
 * - Only integers are accepted; decimals throw.
 *
 * Complexity: O(1)
 *
 * @param {number} n - Number to check
 * @returns {boolean} true when n is divisible by 2
 * @throws {Error} If n is not a number or not an integer
 */
function isEven(n) {
  if (typeof n !== 'number') throw new Error(ERR.NUM);
  if (!Number.isInteger(n)) throw new Error(ERR.INT);
  return n % 2 === 0;
}

/**
 * Removes duplicate values from an array while preserving the first
 * occurrence order.
 *
 * Algorithm:
 * 1. Validate input is an array
 * 2. Iterate once, using a Set to keep track of seen values
 * 3. Push unseen values to result
 *
 * Complexity: O(n) time, O(n) space
 *
 * @param {Array} arr - Input array with any value types
 * @returns {Array} A new array without duplicate items
 * @throws {Error} If arr is not an array
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error(ERR.ARR);
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      out.push(item);
    }
  }
  return out;
}

module.exports = {
  reverseString,
  isEven,
  removeDuplicates,
};
