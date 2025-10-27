// --- Function 1 ---
function stringCompression(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  if (str.length === 0) return '';
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

// --- Function 2 ---
function secondLargest(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (arr.length < 2) throw new Error('Array must have at least 2 elements');
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}

// --- Function 3 ---
function groupAnagrams(words) {
  if (!Array.isArray(words)) throw new Error('Input must be an array');
  const groups = {};
  words.forEach((word) => {
    const sorted = word.split('').sort().join('');
    if (!groups[sorted]) groups[sorted] = [];
    groups[sorted].push(word);
  });
  return Object.values(groups);
}

module.exports = { stringCompression, secondLargest, groupAnagrams };
