const { alternateCase, productOfArray, filterNegatives } = require('../src/level1');

describe('Level 1 - Basic Functions', () => {
  test('alternateCase: should alternate case', () => {
    expect(alternateCase('hello')).toBe('HeLlO');
    expect(alternateCase('hello world')).toBe('HeLlO wOrLd');
  });

  test('alternateCase: should validate input', () => {
    expect(() => alternateCase(123)).toThrow('Input must be a string');
  });

  test('productOfArray: should calculate product', () => {
    expect(productOfArray([2, 3, 4])).toBe(24);
    expect(productOfArray([2, -3, 4])).toBe(-24);
  });

  test('productOfArray: should validate input', () => {
    expect(() => productOfArray('not array')).toThrow('Input must be an array');
  });

  test('filterNegatives: should filter negatives', () => {
    expect(filterNegatives([1, -2, 3, -4, 5])).toEqual([1, 3, 5]);
    expect(filterNegatives([0, -1, 2])).toEqual([0, 2]);
  });

  test('filterNegatives: should validate input', () => {
    expect(() => filterNegatives('not array')).toThrow('Input must be an array');
  });
});
