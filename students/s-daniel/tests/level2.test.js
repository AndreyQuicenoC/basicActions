const { slugify, chunkArray, findMissingNumber } = require('../src/level2');

describe('Level 2 - Logic and Conditions', () => {
  // -----------------------------
  test('slugify: should convert to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  test('slugify: should validate input', () => {
    expect(() => slugify(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('chunkArray: should chunk correctly', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('chunkArray: should validate input', () => {
    expect(() => chunkArray('not array', 2)).toThrow('Input must be an array');
  });

  // -----------------------------
  test('findMissingNumber: should find missing', () => {
    expect(findMissingNumber([1, 2, 4, 5])).toBe(3);
    expect(findMissingNumber([2, 3, 4, 5])).toBe(1);
  });

  test('findMissingNumber: should validate input', () => {
    expect(() => findMissingNumber('not array')).toThrow('Input must be an array');
  });
});
