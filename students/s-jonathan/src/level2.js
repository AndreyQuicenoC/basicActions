/**
 * Level 2 - Intermediate Functions
 * Student: s-jonathan
 *
 * This module contains intermediate utilities:
 * - countWords: number of words in a string
 * - isPrime: primality test for integers
 * - camelToSnake: convert camelCase/PascalCase to snake_case
 */

const ERR = {
  STR: 'Input must be a string',
  NUM: 'Input must be a number',
  INT: 'Input must be an integer',
};

// Keep validations small and reusable to reduce complexity within algorithms
function assertInteger(n) {
  if (typeof n !== 'number') throw new Error(ERR.NUM);
  if (!Number.isInteger(n)) throw new Error(ERR.INT);
}

/**
 * Counts words in a text. Words are sequences of letters/numbers/underscore
 * detected with the regex /\b\w+\b/.
 *
 * @param {string} str
 * @returns {number}
 * @throws {Error} If input is not a string
 */
function countWords(str) {
  if (typeof str !== 'string') throw new Error(ERR.STR);
  const matches = str.match(/\b\w+\b/g);
  return matches ? matches.length : 0;
}

/**
 * Determines whether n is a prime number.
 * - Only integers are accepted
 * - Returns false for n < 2
 *
 * @param {number} n
 * @returns {boolean}
 * @throws {Error} If n is not a number or not an integer
 */
function isPrime(n) {
  assertInteger(n);
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Converts camelCase or PascalCase to snake_case.
 * Example: 'camelCase' -> 'camel_case', 'XMLHttpRequest' -> 'xml_http_request'
 *
 * @param {string} str
 * @returns {string}
 * @throws {Error} If input is not a string
 */
function camelToSnake(str) {
  if (typeof str !== 'string') throw new Error(ERR.STR);
  if (str.length === 0) return '';
  const withUnderscores = str
    // insert underscore between lower-to-upper boundaries (fooBar -> foo_Bar)
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    // handle sequences of capitals (HTMLParser -> HTML_Parser)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
  return withUnderscores.toLowerCase();
}

module.exports = { countWords, isPrime, camelToSnake };
