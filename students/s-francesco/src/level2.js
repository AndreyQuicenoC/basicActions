/**
 * Level 2 - Logic and Conditions
 * Student: s-student4
 */

// --- Function 1 ---
function anagramCheck(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error('Both inputs must be strings');
  const sort = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return sort(str1) === sort(str2);
}

// --- Function 2 ---
function findDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach(item => {
    if (seen.has(item)) duplicates.add(item);
    else seen.add(item);
  });
  return Array.from(duplicates);
}

// --- Function 3 ---
function sortByLength(words) {
  if (!Array.isArray(words)) throw new Error('Input must be an array');
  return words.slice().sort((a, b) => a.length - b.length);
}

module.exports = { anagramCheck, findDuplicates, sortByLength };
