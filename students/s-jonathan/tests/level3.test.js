/**
 * Unit Tests for Level 3 - Advanced Algorithms
 * Student: s-jonathan
 */

const { fibonacci, quickSort, binarySearch } = require('../src/level3');

describe('Level 3 - Advanced Algorithms', () => {
  // fibonacci
  test('fibonacci: returns nth number (0-indexed)', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci: validates input', () => {
    expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer');
    expect(() => fibonacci(2.5)).toThrow('Input must be an integer');
    expect(() => fibonacci('3')).toThrow('Input must be a number');
  });

  // quickSort
  test('quickSort: sorts numbers ascending and does not mutate input', () => {
    const data = [5, 3, 8, 2, 1, 4];
    const sorted = quickSort(data);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 8]);
    // original not mutated
    expect(data).toEqual([5, 3, 8, 2, 1, 4]);
  });

  test('quickSort: validates input', () => {
    expect(() => quickSort('not array')).toThrow('Input must be an array');
    expect(() => quickSort([1, 'a', 3])).toThrow('All elements must be numbers');
  });

  // binarySearch
  test('binarySearch: finds index in sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 8];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 4)).toBe(3);
    expect(binarySearch(arr, 8)).toBe(5);
    expect(binarySearch(arr, 6)).toBe(-1);
  });

  test('binarySearch: validates input', () => {
    expect(() => binarySearch('not array', 1)).toThrow('Input must be an array');
    expect(() => binarySearch([1, 2, '3'], 3)).toThrow('All elements must be numbers');
    expect(() => binarySearch([1, 2, 3], '3')).toThrow('Input must be a number');
  });
});
