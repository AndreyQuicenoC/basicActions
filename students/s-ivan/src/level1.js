/**
 * Level 1 - Basic Functions
 * Student: s-ivan
 * 
 * This module contains three fundamental functions that demonstrate:
 * - String operations
 * - Array manipulations
 * - Number calculations
 * 
 * All functions include input validation and error handling.
 */

// Constantes para mensajes de error
const ERROR_MESSAGES = {
  NOT_AN_ARRAY: 'First parameter must be an array',
  NOT_A_STRING: 'First parameter must be a string',
  NOT_A_NUMBER: 'must be a number',
  NEGATIVE_LENGTH: 'Max length cannot be negative',
  INVALID_RANGE: 'Start must be less than or equal to end',
};

// Constantes para configuración
const TRUNCATE_SUFFIX = '...';

/**
 * Counts the number of occurrences of a value in an array
 * 
 * Algorithm:
 * 1. Validates input is an array
 * 2. Uses filter to count matching elements
 * 3. Returns the count
 * 
 * Complexity: O(n) where n is the length of the array
 * 
 * @param {Array} arr - The array to search in
 * @param {*} value - The value to count
 * @returns {number} The number of times the value appears in the array
 * @throws {Error} If input is not an array
 * 
 * @example
 * countOccurrences([1, 2, 3, 2, 4, 2], 2)  // Returns: 3
 * countOccurrences(['a', 'b', 'a'], 'a')  // Returns: 2
 */
function countOccurrences(arr, value) {
  // 1. Validar tipos de entrada
  if (!Array.isArray(arr)) throw new Error(ERROR_MESSAGES.NOT_AN_ARRAY);
  
  // 2. Validar casos especiales
  if (arr.length === 0) return 0;
  
  // 3. Implementar lógica principal
  return arr.filter(item => item === value).length;
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * 
 * Algorithm:
 * 1. Validates input types
 * 2. Checks if truncation is needed
 * 3. Returns truncated string with ellipsis if necessary
 * 
 * Complexity: O(n) where n is the max length
 * 
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} The truncated string
 * @throws {Error} If inputs are invalid
 * 
 * @example
 * truncateString('Hello World', 5)  // Returns: 'Hello...'
 * truncateString('Hi', 10)          // Returns: 'Hi'
 */
function truncateString(str, maxLength) {
  // 1. Validar tipos de entrada
  if (typeof str !== 'string') throw new Error(ERROR_MESSAGES.NOT_A_STRING);
  if (typeof maxLength !== 'number') throw new Error(`Second parameter ${ERROR_MESSAGES.NOT_A_NUMBER}`);
  
  // 2. Validar casos especiales
  if (maxLength < 0) throw new Error(ERROR_MESSAGES.NEGATIVE_LENGTH);
  if (str.length <= maxLength) return str;
  
  // 3. Implementar lógica principal
  return str.slice(0, maxLength) + TRUNCATE_SUFFIX;
}

/**
 * Calculates the sum of numbers in a range from start to end (inclusive)
 * 
 * Algorithm:
 * 1. Validates input types
 * 2. Uses arithmetic series formula: n(n+1)/2
 * 3. Returns the sum
 * 
 * Complexity: O(1) - constant time using formula
 * 
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range (inclusive)
 * @returns {number} The sum of all numbers in the range
 * @throws {Error} If inputs are not numbers
 * 
 * @example
 * sumRange(1, 5)   // Returns: 15 (1+2+3+4+5)
 * sumRange(3, 7)   // Returns: 25 (3+4+5+6+7)
 */
function sumRange(start, end) {
  // 1. Validar tipos de entrada
  if (typeof start !== 'number') throw new Error(`Start ${ERROR_MESSAGES.NOT_A_NUMBER}`);
  if (typeof end !== 'number') throw new Error(`End ${ERROR_MESSAGES.NOT_A_NUMBER}`);
  
  // 2. Validar casos especiales
  if (start > end) throw new Error(ERROR_MESSAGES.INVALID_RANGE);
  
  // 3. Implementar lógica principal
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

module.exports = {
  countOccurrences,
  truncateString,
  sumRange,
};
