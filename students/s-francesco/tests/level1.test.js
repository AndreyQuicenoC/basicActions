const { isPalindrome, sumEvenNumbers, repeatString } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  test('isPalindrome: should detect palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });

  test('isPalindrome: should validate input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  test('sumEvenNumbers: should sum even numbers', () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    expect(sumEvenNumbers([1, 3, 5])).toBe(0);
  });

  test('sumEvenNumbers: should validate input', () => {
    expect(() => sumEvenNumbers('not array')).toThrow('Input must be an array');
  });

  test('repeatString: should repeat correctly', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
    expect(repeatString('abc', 0)).toBe('');
  });

  test('repeatString: should validate input', () => {
    expect(() => repeatString(123, 3)).toThrow('Input must be a string');
    expect(() => repeatString('abc', -1)).toThrow('Times must be a non-negative number');
  });
});
