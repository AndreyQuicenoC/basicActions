/**
 * Level 2 - Intermediate Functions
 * Student: s-ivan
 * 
 * This module contains intermediate complexity functions:
 * - Roman numeral conversion
 * - Nested array operations
 * - Array search algorithms
 * 
 * All functions include input validation and error handling.
 */

// Constantes para conversión romana
const ROMAN_NUMERALS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Constantes para mensajes de error
const ERROR_MESSAGES = {
  NOT_A_STRING: 'Input must be a string',
  NOT_AN_ARRAY: 'Input must be an array',
  EMPTY_INPUT: 'Input cannot be empty',
  EMPTY_ARRAY: 'Array cannot be empty',
  INVALID_ROMAN: 'Invalid Roman numeral character',
  ALL_NUMBERS: 'All elements must be numbers',
};

/**
 * Converts a Roman numeral string to an integer
 * 
 * Algorithm:
 * 1. Validates input is a string
 * 2. Uses Roman numeral mapping
 * 3. Handles subtraction cases (IV, IX, etc.)
 * 4. Sums values left to right
 * 
 * Complexity: O(n) where n is the length of the Roman numeral
 * 
 * @param {string} roman - The Roman numeral string (I, V, X, L, C, D, M)
 * @returns {number} The integer value
 * @throws {Error} If input is invalid
 * 
 * @example
 * romanToInteger('IX')    // Returns: 9
 * romanToInteger('LVIII') // Returns: 58
 * romanToInteger('MCMXCIV') // Returns: 1994
 */
function romanToInteger(roman) {
  // 1. Validar tipos de entrada
  if (typeof roman !== 'string') throw new Error(ERROR_MESSAGES.NOT_A_STRING);
  
  // 2. Validar casos especiales
  if (roman.length === 0) throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  
  validateRomanCharacters(roman);
  
  // 3. Implementar lógica principal
  return calculateRomanValue(roman);
}

function validateRomanCharacters(roman) {
  for (let char of roman) {
    if (!ROMAN_NUMERALS[char]) {
      throw new Error(ERROR_MESSAGES.INVALID_ROMAN);
    }
  }
}

function calculateRomanValue(roman) {
  let result = 0;
  
  for (let i = 0; i < roman.length; i++) {
    const current = ROMAN_NUMERALS[roman[i]];
    const next = ROMAN_NUMERALS[roman[i + 1]];
    
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  
  return result;
}

/**
 * Flattens a nested array into a single-level array
 * 
 * Algorithm:
 * 1. Validates input is an array
 * 2. Recursively flattens nested arrays
 * 3. Returns single-level array
 * 
 * Complexity: O(n) where n is total number of elements
 * 
 * @param {Array} arr - The array to flatten (can be nested)
 * @returns {Array} A flat array
 * @throws {Error} If input is not an array
 * 
 * @example
 * flattenArray([1, [2, 3], [4, [5]]])  // Returns: [1, 2, 3, 4, 5]
 * flattenArray([1, 2, 3])              // Returns: [1, 2, 3]
 */
function flattenArray(arr) {
  // 1. Validar tipos de entrada
  if (!Array.isArray(arr)) throw new Error(ERROR_MESSAGES.NOT_AN_ARRAY);
  
  // 2. Validar casos especiales
  if (arr.length === 0) return [];
  
  // 3. Implementar lógica principal
  const result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

/**
 * Finds a peak element in an array (element greater than its neighbors)
 * 
 * Algorithm:
 * 1. Validates input is an array of numbers
 * 2. Uses linear search to find peak
 * 3. Returns index of peak element
 * 
 * Complexity: O(n) where n is array length
 * 
 * @param {Array<number>} arr - Array of numbers
 * @returns {number} Index of a peak element
 * @throws {Error} If input is invalid
 * 
 * @example
 * findPeakElement([1, 3, 2, 1])     // Returns: 1 (value 3)
 * findPeakElement([1, 2, 3, 4, 5])  // Returns: 4 (last element)
 */
function findPeakElement(arr) {
  validatePeakInput(arr);
  
  if (arr.length === 1) return 0;
  
  return findPeak(arr);
}

function validatePeakInput(arr) {
  if (!Array.isArray(arr)) throw new Error(ERROR_MESSAGES.NOT_AN_ARRAY);
  if (arr.length === 0) throw new Error(ERROR_MESSAGES.EMPTY_ARRAY);
  
  for (let item of arr) {
    if (typeof item !== 'number') {
      throw new Error(ERROR_MESSAGES.ALL_NUMBERS);
    }
  }
}

function findPeak(arr) {
  if (arr[0] > arr[1]) return 0;
  if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;
  
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
  
  return arr.length - 1;
}

module.exports = {
  romanToInteger,
  flattenArray,
  findPeakElement,
};
