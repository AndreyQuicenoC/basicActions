/**
 * Level 3 - Advanced Algorithms
 * Student: s-jonathan
 *
 * This module implements classic CS algorithms:
 * - fibonacci: nth Fibonacci number (iterative)
 * - quickSort: quicksort for number arrays (non-mutating)
 * - binarySearch: index lookup in a sorted array
 */

const ERR = {
  NUM: 'Input must be a number',
  INT: 'Input must be an integer',
  NON_NEG: 'Input must be a non-negative integer',
  ARR: 'Input must be an array',
  ALL_NUM: 'All elements must be numbers',
};

// Small validation helpers (keep algorithm functions simple)
function assertNumber(n) {
  if (typeof n !== 'number') throw new Error(ERR.NUM);
}

function assertNonNegativeInteger(n) {
  assertNumber(n);
  if (!Number.isInteger(n)) throw new Error(ERR.INT);
  if (n < 0) throw new Error(ERR.NON_NEG);
}

/**
 * Returns the nth Fibonacci number (0-indexed):
 * f(0)=0, f(1)=1, f(n)=f(n-1)+f(n-2).
 * Iterative approach to keep O(1) space.
 *
 * @param {number} n
 * @returns {number}
 * @throws {Error} If n is not a non-negative integer
 */
function fibonacci(n) {
  assertNonNegativeInteger(n);
  if (n < 2) return n; // handles 0 and 1
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

/**
 * Sorts a numeric array using quicksort, returning a NEW sorted array.
 *
 * @param {number[]} arr
 * @returns {number[]}
 * @throws {Error} If arr is not an array or contains non-numbers
 */
function quickSort(arr) {
  validateArrayOfNumbers(arr);
  if (arr.length <= 1) return arr.slice();
  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];
  for (const x of arr) {
    if (x < pivot) less.push(x);
    else if (x > pivot) greater.push(x);
    else equal.push(x);
  }
  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

/**
 * Performs binary search in a sorted array of numbers.
 * Returns the index of target or -1 if not found.
 *
 * @param {number[]} arr - Sorted ascending array
 * @param {number} target
 * @returns {number}
 * @throws {Error} If arr is not an array or contains non-numbers; if target is not a number
 */
function binarySearch(arr, target) {
  validateArrayOfNumbers(arr);
  assertNumber(target);
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1; else r = m - 1;
  }
  return -1;
}

function validateArrayOfNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error(ERR.ARR);
  for (const v of arr) {
    if (typeof v !== 'number') throw new Error(ERR.ALL_NUM);
  }
}

module.exports = { fibonacci, quickSort, binarySearch };
