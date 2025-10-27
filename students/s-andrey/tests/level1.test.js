/**
 * Unit Tests for Level 1 - Basic Functions
 * Student: s-andrey
 * 
 * Test Coverage Strategy:
 * - Happy path: Normal expected inputs
 * - Edge cases: Empty inputs, boundary values
 * - Error cases: Invalid input types
 * 
 * Coverage Target: 100% (statements, branches, functions, lines)
 */

const { reverseString, isEven, removeDuplicates } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  
  /**
   * Test Suite: reverseString
   * 
   * Validates:
   * - Correct reversal of non-empty strings
   * - Handling of empty strings
   * - Type validation
   */
  describe('reverseString', () => {
    test('should reverse non-empty strings correctly', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('JavaScript')).toBe('tpircSavaJ');
      expect(reverseString('12345')).toBe('54321');
    });

    test('should handle empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => reverseString(123)).toThrow('Input must be a string');
      expect(() => reverseString(null)).toThrow('Input must be a string');
      expect(() => reverseString(undefined)).toThrow('Input must be a string');
      expect(() => reverseString([])).toThrow('Input must be a string');
    });
  });

  /**
   * Test Suite: isEven
   * 
   * Validates:
   * - Positive even numbers
   * - Negative even numbers
   * - Zero
   * - Odd numbers (should return false)
   * - Type validation
   */
  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    test('should throw error for non-number input', () => {
      expect(() => isEven('4')).toThrow('Input must be a number');
      expect(() => isEven(null)).toThrow('Input must be a number');
      expect(() => isEven(undefined)).toThrow('Input must be a number');
      expect(() => isEven([])).toThrow('Input must be a number');
    });
  });

  /**
   * Test Suite: removeDuplicates
   * 
   * Validates:
   * - Removal of duplicates from number arrays
   * - Removal of duplicates from string arrays
   * - Empty array handling
   * - Array with no duplicates
   * - Type validation
   */
  describe('removeDuplicates', () => {
    test('should remove duplicates from number arrays', () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(removeDuplicates([1, 1, 1, 1])).toEqual([1]);
    });

    test('should remove duplicates from string arrays', () => {
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
      expect(removeDuplicates(['hello', 'world', 'hello'])).toEqual(['hello', 'world']);
    });

    test('should handle empty arrays', () => {
      expect(removeDuplicates([])).toEqual([]);
    });

    test('should handle arrays with no duplicates', () => {
      expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should throw error for non-array input', () => {
      expect(() => removeDuplicates('not array')).toThrow('Input must be an array');
      expect(() => removeDuplicates(123)).toThrow('Input must be an array');
      expect(() => removeDuplicates(null)).toThrow('Input must be an array');
      expect(() => removeDuplicates(undefined)).toThrow('Input must be an array');
    });
  });
});
