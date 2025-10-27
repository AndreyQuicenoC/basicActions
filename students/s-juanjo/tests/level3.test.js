const { sudokuValidator, pathfinder, lruCache } = require('../src/level3');

describe('Level 3 - Algorithms and Metrics', () => {
  test('sudokuValidator: should validate board', () => {
    const board = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    expect(sudokuValidator(board)).toBe(true);
  });

  test('sudokuValidator: should validate input', () => {
    expect(() => sudokuValidator('not array')).toThrow(
      'Input must be an array'
    );
  });

  test('pathfinder: should find path', () => {
    const matrix = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];
    const path = pathfinder(matrix, [0, 0], [2, 2]);
    expect(path.length).toBeGreaterThan(0);
  });

  test('pathfinder: should validate input', () => {
    expect(() => pathfinder('not array', [0, 0], [1, 1])).toThrow(
      'Input must be an array'
    );
  });

  test('lruCache: should work correctly', () => {
    const cache = lruCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
  });

  test('lruCache: should validate capacity', () => {
    expect(() => lruCache('2')).toThrow('Capacity must be a positive number');
  });
});