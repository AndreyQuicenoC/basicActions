/**
 * Level 2 - Logic and Conditions
 * Student: s-student3
 */

// --- Function 1 ---
function slugify(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

// --- Function 2 ---
function chunkArray(arr, size) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (typeof size !== 'number' || size < 1) throw new Error('Size must be a positive number');
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// --- Function 3 ---
function findMissingNumber(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

module.exports = { slugify, chunkArray, findMissingNumber };
