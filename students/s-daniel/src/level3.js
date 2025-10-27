/**
 * Level 3 - Algorithms and Metrics
 * Student: s-student3
 */

// --- Function 1 ---
function validateCreditCard(cardNumber) {
  if (typeof cardNumber !== 'string') throw new Error('Input must be a string');
  const digits = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(digits)) return false;
  let sum = 0;
  let isEven = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}

// --- Function 2 ---
function generatePrimes(n) {
  if (typeof n !== 'number' || n < 0) throw new Error('Input must be a non-negative number');
  if (n < 2) return [];
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

// --- Function 3 ---
function longestCommonPrefix(strs) {
  if (!Array.isArray(strs)) throw new Error('Input must be an array');
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  return prefix;
}

module.exports = { validateCreditCard, generatePrimes, longestCommonPrefix };
