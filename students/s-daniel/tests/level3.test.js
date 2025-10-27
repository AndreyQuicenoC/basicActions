const { validateCreditCard, generatePrimes, longestCommonPrefix } = require('../src/level3');

describe('Level 3 - Algorithms and Metrics', () => {
  // -----------------------------
  test('validateCreditCard: should validate cards', () => {
    expect(validateCreditCard('79927398713')).toBe(true);
    expect(validateCreditCard('1234567812345678')).toBe(false);
  });

  test('validateCreditCard: should validate input', () => {
    expect(() => validateCreditCard(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('generatePrimes: should generate primes', () => {
    expect(generatePrimes(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimes(1)).toEqual([]);
  });

  test('generatePrimes: should validate input', () => {
    expect(() => generatePrimes(-1)).toThrow('Input must be a non-negative number');
  });

  // -----------------------------
  test('longestCommonPrefix: should find prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  test('longestCommonPrefix: should validate input', () => {
    expect(() => longestCommonPrefix('not array')).toThrow('Input must be an array');
  });
});
