const {
  stringCompression,
  secondLargest,
  groupAnagrams,
} = require('../src/level2');

describe('Level 2 - Logic and Conditions', () => {
  test('stringCompression: should compress strings', () => {
    expect(stringCompression('aaabbc')).toBe('a3b2c1');
    expect(stringCompression('aaaaaa')).toBe('a6');
  });

  test('stringCompression: should validate input', () => {
    expect(() => stringCompression(123)).toThrow('Input must be a string');
  });

  test('secondLargest: should find second largest', () => {
    expect(secondLargest([1, 5, 3, 9, 2])).toBe(5);
    expect(secondLargest([5, 3])).toBe(3);
  });

  test('secondLargest: should validate input', () => {
    expect(() => secondLargest('not array')).toThrow('Input must be an array');
  });

  test('groupAnagrams: should group anagrams', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(result.length).toBe(3);
  });

  test('groupAnagrams: should validate input', () => {
    expect(() => groupAnagrams('not array')).toThrow('Input must be an array');
  });
});
