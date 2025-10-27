const { caesarCipher, knapsackProblem, powerSet } = require('../src/level3');

describe('Level 3 - Algorithms and Metrics', () => {
  test('caesarCipher: should encrypt correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('caesarCipher: should validate input', () => {
    expect(() => caesarCipher(123, 1)).toThrow('Text must be a string');
  });

  test('knapsackProblem: should find max value', () => {
    expect(knapsackProblem([2, 3, 4], [3, 4, 5], 5)).toBe(7);
    expect(knapsackProblem([1, 2], [3, 4], 0)).toBe(0);
  });

  test('knapsackProblem: should validate input', () => {
    expect(() => knapsackProblem('not', [1], 5)).toThrow('Weights and values must be arrays');
  });

  test('powerSet: should generate all subsets', () => {
    const result = powerSet([1, 2]);
    expect(result.length).toBe(4);
    expect(result).toContainEqual([]);
    expect(result).toContainEqual([1, 2]);
  });

  test('powerSet: should validate input', () => {
    expect(() => powerSet('not array')).toThrow('Input must be an array');
  });
});
