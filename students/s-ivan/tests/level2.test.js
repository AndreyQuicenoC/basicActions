/**
 * Unit Tests for Level 2 - Intermediate Functions
 * Student: s-ivan
 * 
 * Test Coverage Strategy:
 * - Happy path: Normal expected inputs
 * - Edge cases: Empty inputs, boundary values
 * - Error cases: Invalid input types
 * 
 * Coverage Target: 100% (statements, branches, functions, lines)
 */

const { romanToInteger, flattenArray, findPeakElement } = require('../src/level2');

describe('Level 2 - Intermediate Functions', () => {
  
  // -----------------------------
  // romanToInteger Tests
  // -----------------------------
  
  test('romanToInteger: should convert Roman numerals to integers', () => {
    expect(romanToInteger('III')).toBe(3);
    expect(romanToInteger('IV')).toBe(4);
    expect(romanToInteger('IX')).toBe(9);
    expect(romanToInteger('LVIII')).toBe(58);
    expect(romanToInteger('MCMXCIV')).toBe(1994);
  });

  test('romanToInteger: should handle single characters', () => {
    expect(romanToInteger('I')).toBe(1);
    expect(romanToInteger('V')).toBe(5);
    expect(romanToInteger('X')).toBe(10);
    expect(romanToInteger('L')).toBe(50);
    expect(romanToInteger('C')).toBe(100);
    expect(romanToInteger('D')).toBe(500);
    expect(romanToInteger('M')).toBe(1000);
  });

  test('romanToInteger: should validate input', () => {
    expect(() => romanToInteger(123)).toThrow('Input must be a string');
    expect(() => romanToInteger('')).toThrow('Input cannot be empty');
    expect(() => romanToInteger('ABC')).toThrow('Invalid Roman numeral character');
    expect(() => romanToInteger('IXZ')).toThrow('Invalid Roman numeral character');
    expect(() => romanToInteger(null)).toThrow('Input must be a string');
  });

  // -----------------------------
  // flattenArray Tests
  // -----------------------------
  
  test('flattenArray: should flatten nested arrays', () => {
    expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flattenArray([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  test('flattenArray: should handle already flat arrays', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(flattenArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('flattenArray: should handle empty arrays', () => {
    expect(flattenArray([])).toEqual([]);
    expect(flattenArray([[]])).toEqual([]);
    expect(flattenArray([[], []])).toEqual([]);
  });

  test('flattenArray: should validate input', () => {
    expect(() => flattenArray('not an array')).toThrow('Input must be an array');
    expect(() => flattenArray(123)).toThrow('Input must be an array');
    expect(() => flattenArray(null)).toThrow('Input must be an array');
    expect(() => flattenArray(undefined)).toThrow('Input must be an array');
  });

  // -----------------------------
  // findPeakElement Tests
  // -----------------------------
  
  test('findPeakElement: should find peak in array', () => {
    expect(findPeakElement([1, 3, 2, 1])).toBe(1);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(1); // Can return any peak (1 or 5)
    expect(findPeakElement([1, 2, 3, 4, 5])).toBe(4);
  });

  test('findPeakElement: should handle single element', () => {
    expect(findPeakElement([5])).toBe(0);
  });

  test('findPeakElement: should handle peak at start', () => {
    expect(findPeakElement([5, 4, 3, 2, 1])).toBe(0);
  });

  test('findPeakElement: should handle peak at end', () => {
    expect(findPeakElement([1, 2, 3, 4, 5])).toBe(4);
  });

  test('findPeakElement: should validate input', () => {
    expect(() => findPeakElement('not an array')).toThrow('Input must be an array');
    expect(() => findPeakElement([])).toThrow('Array cannot be empty');
    expect(() => findPeakElement([1, 'a', 3])).toThrow('All elements must be numbers');
    expect(() => findPeakElement([1, null, 3])).toThrow('All elements must be numbers');
    expect(() => findPeakElement(null)).toThrow('Input must be an array');
  });

});
