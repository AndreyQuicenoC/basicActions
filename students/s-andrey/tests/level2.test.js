/**
 * Unit Tests for Level 2 - Logic and Conditions
 * Student: s-andrey
 * 
 * Test Coverage Strategy:
 * - Happy path: Standard expected inputs
 * - Edge cases: Empty strings, boundary values, special numbers
 * - Error cases: Invalid input types
 * - Algorithm validation: Multiple test cases per function
 * 
 * Coverage Target: 100% (statements, branches, functions, lines)
 */

const { countWords, isPrime, camelToSnake } = require('../src/level2');

describe('Level 2 - Logic and Conditions', () => {
  
  /**
   * Test Suite: countWords
   * 
   * Validates:
   * - Counting words in normal sentences
   * - Handling multiple consecutive spaces
   * - Empty strings and whitespace-only strings
   * - Type validation
   */
  describe('countWords', () => {
    test('should count words in normal sentences', () => {
      expect(countWords('Hello world')).toBe(2);
      expect(countWords('The quick brown fox')).toBe(4);
      expect(countWords('One')).toBe(1);
    });

    test('should handle multiple consecutive spaces', () => {
      expect(countWords('Hello   world   test')).toBe(3);
      expect(countWords('  Multiple   spaces   between  ')).toBe(3);
    });

    test('should handle empty and whitespace-only strings', () => {
      expect(countWords('')).toBe(0);
      expect(countWords('   ')).toBe(0);
      expect(countWords('\t\n')).toBe(0);
    });

    test('should throw error for non-string input', () => {
      expect(() => countWords(123)).toThrow('Input must be a string');
      expect(() => countWords(null)).toThrow('Input must be a string');
      expect(() => countWords(undefined)).toThrow('Input must be a string');
      expect(() => countWords([])).toThrow('Input must be a string');
    });
  });

  /**
   * Test Suite: isPrime
   * 
   * Validates:
   * - Small prime numbers (2, 3, 5)
   * - Larger prime numbers
   * - Composite numbers
   * - Edge cases (0, 1, negative numbers)
   * - Type validation
   */
  describe('isPrime', () => {
    test('should return true for small prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
    });

    test('should return true for larger prime numbers', () => {
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    test('should return false for composite numbers', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    test('should return false for edge cases', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
      expect(isPrime(-7)).toBe(false);
    });

    test('should throw error for non-number input', () => {
      expect(() => isPrime('5')).toThrow('Input must be a number');
      expect(() => isPrime(null)).toThrow('Input must be a number');
      expect(() => isPrime(undefined)).toThrow('Input must be a number');
      expect(() => isPrime([])).toThrow('Input must be a number');
    });
  });

  /**
   * Test Suite: camelToSnake
   * 
   * Validates:
   * - Standard camelCase conversion
   * - Multiple uppercase letters
   * - Strings with no uppercase letters
   * - Empty strings
   * - Type validation
   */
  describe('camelToSnake', () => {
    test('should convert standard camelCase to snake_case', () => {
      expect(camelToSnake('helloWorld')).toBe('hello_world');
      expect(camelToSnake('myVariableName')).toBe('my_variable_name');
      expect(camelToSnake('firstName')).toBe('first_name');
    });

    test('should handle multiple uppercase letters', () => {
      expect(camelToSnake('getHTTPResponse')).toBe('get_h_t_t_p_response');
      expect(camelToSnake('XMLParser')).toBe('_x_m_l_parser');
    });

    test('should handle strings with no uppercase letters', () => {
      expect(camelToSnake('hello')).toBe('hello');
      expect(camelToSnake('test')).toBe('test');
      expect(camelToSnake('')).toBe('');
    });

    test('should handle strings that start with uppercase', () => {
      expect(camelToSnake('HelloWorld')).toBe('_hello_world');
      expect(camelToSnake('Test')).toBe('_test');
    });

    test('should throw error for non-string input', () => {
      expect(() => camelToSnake(123)).toThrow('Input must be a string');
      expect(() => camelToSnake(null)).toThrow('Input must be a string');
      expect(() => camelToSnake(undefined)).toThrow('Input must be a string');
      expect(() => camelToSnake([])).toThrow('Input must be a string');
    });
  });
});
