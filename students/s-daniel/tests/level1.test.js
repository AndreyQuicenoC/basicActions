const { countConsonants, factorial, findIndexOf } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  // -----------------------------
  test('countConsonants: should count consonants', () => {
    expect(countConsonants('hello')).toBe(3);
    expect(countConsonants('aeiou')).toBe(0);
    expect(countConsonants('HeLLo WoRLd')).toBe(7);
  });

  test('countConsonants: should validate input', () => {
    expect(() => countConsonants(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('factorial: should calculate factorial', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test('factorial: should validate input', () => {
    expect(() => factorial(-1)).toThrow('Input must be a non-negative number');
  });

  // -----------------------------
  test('findIndexOf: should find index', () => {
    expect(findIndexOf([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(findIndexOf([1, 2, 3], 5)).toBe(-1);
  });

  test('findIndexOf: should validate input', () => {
    expect(() => findIndexOf('not array', 3)).toThrow('Input must be an array');
  });
});
