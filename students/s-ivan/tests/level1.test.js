/**
 * Unit Tests for Level 1 - Basic Functions
 * Student: s-ivan
 * 
 * Test Coverage Strategy:
 * - Happy path: Normal expected inputs
 * - Edge cases: Empty inputs, boundary values
 * - Error cases: Invalid input types
 * 
 * Coverage Target: 100% (statements, branches, functions, lines)
 */

const { countOccurrences, truncateString, sumRange } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  
  // -----------------------------
  // countOccurrences Tests
  // -----------------------------
  
  test('countOccurrences: should count occurrences in array', () => {
    expect(countOccurrences([1, 2, 3, 2, 4, 2], 2)).toBe(3);
    expect(countOccurrences(['a', 'b', 'a', 'c', 'a'], 'a')).toBe(3);
    expect(countOccurrences([1, 2, 3, 4, 5], 6)).toBe(0);
  });

  test('countOccurrences: should handle empty array', () => {
    expect(countOccurrences([], 1)).toBe(0);
  });

  test('countOccurrences: should validate input', () => {
    expect(() => countOccurrences('not an array', 1)).toThrow('First parameter must be an array');
    expect(() => countOccurrences(null, 1)).toThrow('First parameter must be an array');
    expect(() => countOccurrences(123, 1)).toThrow('First parameter must be an array');
  });

  // -----------------------------
  // truncateString Tests
  // -----------------------------
  
  test('truncateString: should truncate long strings', () => {
    expect(truncateString('Hello World', 5)).toBe('Hello...');
    expect(truncateString('JavaScript is awesome', 10)).toBe('JavaScript...');
    expect(truncateString('Test', 2)).toBe('Te...');
  });

  test('truncateString: should not truncate short strings', () => {
    expect(truncateString('Hi', 10)).toBe('Hi');
    expect(truncateString('Hello', 5)).toBe('Hello');
    expect(truncateString('Test', 4)).toBe('Test');
  });

  test('truncateString: should handle empty string', () => {
    expect(truncateString('', 5)).toBe('');
  });

  test('truncateString: should validate input', () => {
    expect(() => truncateString(123, 5)).toThrow('First parameter must be a string');
    expect(() => truncateString('test', 'not a number')).toThrow('Second parameter must be a number');
    expect(() => truncateString('test', -1)).toThrow('Max length cannot be negative');
    expect(() => truncateString(null, 5)).toThrow('First parameter must be a string');
  });

  // -----------------------------
  // sumRange Tests
  // -----------------------------
  
  test('sumRange: should calculate sum of range', () => {
    expect(sumRange(1, 5)).toBe(15); // 1+2+3+4+5
    expect(sumRange(3, 7)).toBe(25); // 3+4+5+6+7
    expect(sumRange(1, 1)).toBe(1);
    expect(sumRange(0, 10)).toBe(55);
  });

  test('sumRange: should handle negative numbers', () => {
    expect(sumRange(-3, 3)).toBe(0); // -3+-2+-1+0+1+2+3
    expect(sumRange(-5, -1)).toBe(-15); // -5+-4+-3+-2+-1
  });

  test('sumRange: should validate input', () => {
    expect(() => sumRange('1', 5)).toThrow('Start must be a number');
    expect(() => sumRange(1, '5')).toThrow('End must be a number');
    expect(() => sumRange(5, 1)).toThrow('Start must be less than or equal to end');
    expect(() => sumRange(null, 5)).toThrow('Start must be a number');
    expect(() => sumRange(1, undefined)).toThrow('End must be a number');
  });

});
