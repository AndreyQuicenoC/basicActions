/**
 * Level 1 - Basic Functions
 * Student: s-andrey
 *
 * This module contains three fundamental functions that demonstrate:
 * - String manipulation
 * - Number validation
 * - Array operations with Set
 *
 * All functions include input validation and error handling.
 */

/**
 * Reverses a given string
 *
 * Algorithm:
 * 1. Validates input is a string
 * 2. Splits string into array of characters
 * 3. Reverses the array
 * 4. Joins back into a string
 *
 * Complexity: O(n) where n is the length of the string
 *
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 * @throws {Error} If input is not a string
 *
 * @example
 * reverseString('hello')  // Returns: 'olleh'
 * reverseString('JavaScript')  // Returns: 'tpircSavaJ'
 */
function reverseString(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  return str.split('').reverse().join('');
}

/**
 * Checks if a number is even
 *
 * Algorithm:
 * 1. Validates input is a number
 * 2. Uses modulo operator to check divisibility by 2
 *
 * Complexity: O(1) - constant time operation
 *
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is even, false otherwise
 * @throws {Error} If input is not a number
 *
 * @example
 * isEven(4)   // Returns: true
 * isEven(3)   // Returns: false
 * isEven(0)   // Returns: true
 * isEven(-2)  // Returns: true
 */
function isEven(num) {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  return num % 2 === 0;
}

/**
 * Removes duplicate values from an array
 *
 * Algorithm:
 * 1. Validates input is an array
 * 2. Creates a Set from the array (Sets only store unique values)
 * 3. Spreads the Set back into a new array
 *
 * Complexity: O(n) where n is the array length
 *
 * Note: This preserves the order of first occurrence.
 * Works with primitive values (numbers, strings, booleans).
 *
 * @param {Array} arr - The array to remove duplicates from
 * @returns {Array} A new array with duplicates removed
 * @throws {Error} If input is not an array
 *
 * @example
 * removeDuplicates([1, 2, 2, 3, 4, 4, 5])  // Returns: [1, 2, 3, 4, 5]
 * removeDuplicates(['a', 'b', 'a', 'c'])   // Returns: ['a', 'b', 'c']
 * removeDuplicates([])                     // Returns: []
 */
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  return [...new Set(arr)];
}

module.exports = {
  reverseString,
  isEven,
  removeDuplicates,
};
