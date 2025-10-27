/**
 * Level 2 - Logic and Conditions
 * Student: s-andrey
 * 
 * This module contains functions that demonstrate:
 * - String parsing with regular expressions
 * - Mathematical algorithms (prime number detection)
 * - String transformation with pattern matching
 * 
 * All functions include input validation and error handling.
 */

/**
 * Counts the number of words in a sentence
 * 
 * Algorithm:
 * 1. Validates input is a string
 * 2. Trims leading/trailing whitespace
 * 3. Returns 0 if empty after trim
 * 4. Splits by one or more whitespace characters using regex
 * 5. Returns the length of the resulting array
 * 
 * Complexity: O(n) where n is the length of the string
 * 
 * @param {string} sentence - The sentence to count words in
 * @returns {number} The number of words in the sentence
 * @throws {Error} If input is not a string
 * 
 * @example
 * countWords('Hello world')           // Returns: 2
 * countWords('Hello   world   test')  // Returns: 3
 * countWords('')                      // Returns: 0
 */
function countWords(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  if (sentence.trim() === '') return 0;
  return sentence.trim().split(/\s+/).length;
}

/**
 * Checks if a number is prime
 * 
 * Algorithm:
 * 1. Validates input is a number
 * 2. Returns false for numbers less than 2
 * 3. Iterates from 2 to square root of the number
 * 4. If any divisor found, returns false
 * 5. If no divisors found, returns true
 * 
 * Complexity: O(√n) where n is the input number
 * 
 * Note: This uses the optimization that we only need to check
 * divisors up to the square root of n.
 * 
 * @param {number} num - The number to check for primality
 * @returns {boolean} True if the number is prime, false otherwise
 * @throws {Error} If input is not a number
 * 
 * @example
 * isPrime(2)   // Returns: true
 * isPrime(3)   // Returns: true
 * isPrime(4)   // Returns: false
 * isPrime(11)  // Returns: true
 */
function isPrime(num) {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Converts a camelCase string to snake_case
 * 
 * Algorithm:
 * 1. Validates input is a string
 * 2. Uses regex to find all uppercase letters
 * 3. Replaces each uppercase letter with underscore + lowercase version
 * 4. Returns the transformed string
 * 
 * Complexity: O(n) where n is the length of the string
 * 
 * @param {string} str - The camelCase string to convert
 * @returns {string} The snake_case version of the string
 * @throws {Error} If input is not a string
 * 
 * @example
 * camelToSnake('helloWorld')      // Returns: 'hello_world'
 * camelToSnake('myVariableName')  // Returns: 'my_variable_name'
 * camelToSnake('hello')           // Returns: 'hello'
 */
function camelToSnake(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

module.exports = {
  countWords,
  isPrime,
  camelToSnake
};
