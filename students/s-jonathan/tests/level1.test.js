/**
 * Unit Tests for Level 1 - Basic Functions
 * Student: s-jonathan
 *
 * Functions under test:
 * - reverseString
 * - isEven
 * - removeDuplicates
 */

const { reverseString, isEven, removeDuplicates } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  // reverseString
  test('reverseString: reverses regular strings and keeps symbols', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('abc 123')).toBe('321 cba');
    expect(reverseString('Árbol!')).toBe('!lobrÁ');
  });

  test('reverseString: validates input type', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
  });

  // isEven
  test('isEven: detects even and odd integers', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(-7)).toBe(false);
  });

  test('isEven: rejects non-integers and non-numbers', () => {
    expect(() => isEven(3.5)).toThrow('Input must be an integer');
    expect(() => isEven('2')).toThrow('Input must be a number');
  });

  // removeDuplicates
  test('removeDuplicates: removes duplicates preserving order', () => {
    expect(removeDuplicates([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicates(['a', 'a', 'b', 'a'])).toEqual(['a', 'b']);
    expect(removeDuplicates([])).toEqual([]);
  });

  test('removeDuplicates: validates input type', () => {
    expect(() => removeDuplicates('not array')).toThrow('Input must be an array');
    expect(() => removeDuplicates(null)).toThrow('Input must be an array');
  });
});
