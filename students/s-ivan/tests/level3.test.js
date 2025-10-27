/**
 * Unit Tests for Level 3 - Advanced Functions
 * Student: s-ivan
 * 
 * Test Coverage Strategy:
 * - Happy path: Normal expected inputs
 * - Edge cases: Empty inputs, boundary values
 * - Error cases: Invalid input types
 * 
 * Coverage Target: 100% (statements, branches, functions, lines)
 */

const { levenshteinDistance, dijkstra, towerOfHanoi } = require('../src/level3');

describe('Level 3 - Advanced Algorithms', () => {
  
  // -----------------------------
  // levenshteinDistance Tests
  // -----------------------------
  
  test('levenshteinDistance: should calculate edit distance', () => {
    expect(levenshteinDistance('kitten', 'sitting')).toBe(3);
    expect(levenshteinDistance('saturday', 'sunday')).toBe(3);
    expect(levenshteinDistance('hello', 'hallo')).toBe(1);
  });

  test('levenshteinDistance: should handle identical strings', () => {
    expect(levenshteinDistance('hello', 'hello')).toBe(0);
    expect(levenshteinDistance('test', 'test')).toBe(0);
  });

  test('levenshteinDistance: should handle empty strings', () => {
    expect(levenshteinDistance('', 'hello')).toBe(5);
    expect(levenshteinDistance('hello', '')).toBe(5);
    expect(levenshteinDistance('', '')).toBe(0);
  });

  test('levenshteinDistance: should validate input', () => {
    expect(() => levenshteinDistance(123, 'test')).toThrow('First parameter must be a string');
    expect(() => levenshteinDistance('test', 123)).toThrow('Second parameter must be a string');
    expect(() => levenshteinDistance(null, 'test')).toThrow('First parameter must be a string');
    expect(() => levenshteinDistance('test', undefined)).toThrow('Second parameter must be a string');
  });

  // -----------------------------
  // dijkstra Tests
  // -----------------------------
  
  test('dijkstra: should find shortest paths', () => {
    const graph1 = {
      A: { B: 1, C: 4 },
      B: { C: 2, D: 5 },
      C: { D: 1 },
      D: {}
    };
    expect(dijkstra(graph1, 'A')).toEqual({ A: 0, B: 1, C: 3, D: 4 });
  });

  test('dijkstra: should handle simple graph', () => {
    const graph2 = {
      A: { B: 1 },
      B: { C: 2 },
      C: {}
    };
    expect(dijkstra(graph2, 'A')).toEqual({ A: 0, B: 1, C: 3 });
  });

  test('dijkstra: should handle single node', () => {
    const graph3 = { A: {} };
    expect(dijkstra(graph3, 'A')).toEqual({ A: 0 });
  });

  test('dijkstra: should handle unreachable nodes', () => {
    const graph4 = {
      A: { B: 1 },
      B: {},
      C: {}
    };
    expect(dijkstra(graph4, 'A')).toEqual({ A: 0, B: 1, C: Infinity });
  });

  test('dijkstra: should validate input', () => {
    expect(() => dijkstra('not an object', 'A')).toThrow('Graph must be an object');
    expect(() => dijkstra({}, 'A')).toThrow('Graph cannot be empty');
    expect(() => dijkstra({ A: {} }, 123)).toThrow('Start node parameter must be a string');
    expect(() => dijkstra({ A: {} }, 'B')).toThrow('Start node does not exist in graph');
    expect(() => dijkstra(null, 'A')).toThrow('Graph must be an object');
  });

  // -----------------------------
  // towerOfHanoi Tests
  // -----------------------------
  
  test('towerOfHanoi: should solve for 1 disk', () => {
    const result = towerOfHanoi(1);
    expect(result).toEqual(['Move disk from A to C']);
    expect(result.length).toBe(1);
  });

  test('towerOfHanoi: should solve for 2 disks', () => {
    const result = towerOfHanoi(2);
    expect(result).toEqual([
      'Move disk from A to B',
      'Move disk from A to C',
      'Move disk from B to C'
    ]);
    expect(result.length).toBe(3);
  });

  test('towerOfHanoi: should solve for 3 disks', () => {
    const result = towerOfHanoi(3);
    expect(result.length).toBe(7); // 2^3 - 1 = 7
    expect(result[0]).toBe('Move disk from A to C');
    expect(result[6]).toBe('Move disk from A to C');
  });

  test('towerOfHanoi: should handle custom rod names', () => {
    const result = towerOfHanoi(1, 'X', 'Z', 'Y');
    expect(result).toEqual(['Move disk from X to Z']);
  });

  test('towerOfHanoi: should validate input', () => {
    expect(() => towerOfHanoi('not a number')).toThrow('Number of disks must be a number');
    expect(() => towerOfHanoi(0)).toThrow('Number of disks must be positive');
    expect(() => towerOfHanoi(-1)).toThrow('Number of disks must be positive');
    expect(() => towerOfHanoi(1.5)).toThrow('Number of disks must be an integer');
    expect(() => towerOfHanoi(1, 123, 'C', 'B')).toThrow('Source rod parameter must be a string');
    expect(() => towerOfHanoi(1, 'A', 123, 'B')).toThrow('Destination rod parameter must be a string');
    expect(() => towerOfHanoi(1, 'A', 'C', 123)).toThrow('Auxiliary rod parameter must be a string');
  });

});
