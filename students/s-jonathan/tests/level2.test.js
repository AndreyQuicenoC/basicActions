/**
 * Unit Tests for Level 2 - Intermediate Functions
 * Student: s-jonathan
 */

const { countWords, isPrime, camelToSnake } = require('../src/level2');

describe('Level 2 - Intermediate Functions', () => {
  // countWords
  test('countWords: counts words separated by spaces and punctuation', () => {
    expect(countWords('Hello world')).toBe(2);
    expect(countWords('One, two; three!')).toBe(3);
    expect(countWords('')).toBe(0);
    expect(countWords('   multiple   spaces here   ')).toBe(3);
  });

  test('countWords: validates input', () => {
    expect(() => countWords(123)).toThrow('Input must be a string');
  });

  // isPrime
  test('isPrime: checks primality correctly', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(29)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  test('isPrime: validates input', () => {
    expect(() => isPrime('7')).toThrow('Input must be a number');
    expect(() => isPrime(5.5)).toThrow('Input must be an integer');
  });

  // camelToSnake
  test('camelToSnake: converts camelCase and PascalCase', () => {
    expect(camelToSnake('camelCase')).toBe('camel_case');
    expect(camelToSnake('PascalCase')).toBe('pascal_case');
    expect(camelToSnake('XMLHttpRequest')).toBe('xml_http_request');
    expect(camelToSnake('a')).toBe('a');
    expect(camelToSnake('')).toBe('');
  });

  test('camelToSnake: validates input', () => {
    expect(() => camelToSnake(null)).toThrow('Input must be a string');
  });
});
