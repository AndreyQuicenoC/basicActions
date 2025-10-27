const { anagramCheck, findDuplicates, sortByLength } = require('../src/level2');

describe('Level 2 - Logic and Conditions', () => {
  test('anagramCheck: should detect anagrams', () => {
    expect(anagramCheck('listen', 'silent')).toBe(true);
    expect(anagramCheck('hello', 'world')).toBe(false);
  });

  test('anagramCheck: should validate input', () => {
    expect(() => anagramCheck(123, 'test')).toThrow('Both inputs must be strings');
  });

  test('findDuplicates: should find duplicates', () => {
    const result = findDuplicates([1, 2, 3, 2, 4, 3]);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  test('findDuplicates: should validate input', () => {
    expect(() => findDuplicates('not array')).toThrow('Input must be an array');
  });

  test('sortByLength: should sort by length', () => {
    expect(sortByLength(['apple', 'pie', 'banana', 'cat'])).toEqual(['pie', 'cat', 'apple', 'banana']);
  });

  test('sortByLength: should validate input', () => {
    expect(() => sortByLength('not array')).toThrow('Input must be an array');
  });
});
