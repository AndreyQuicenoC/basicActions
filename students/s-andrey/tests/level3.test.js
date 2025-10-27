/**
 * Test Suite: Level 3 - Algorithms and Metrics
 * Student: s-andrey
 * 
 * Estrategia de Testing:
 * Para cada algoritmo complejo se valida:
 * 1. Casos normales con diferentes tamaños de entrada
 * 2. Casos límite (arrays vacíos, elementos únicos)
 * 3. Casos especiales (duplicados, valores extremos)
 * 4. Validación de errores con inputs inválidos
 * 
 * Cobertura objetivo: 100% (branches, statements, functions, lines)
 */

const { fibonacci, quickSort, binarySearch } = require('../src/level3');

describe('Level 3 - Algorithms and Metrics', () => {
  
  /**
   * Suite: fibonacci()
   * Valida la generación correcta de la secuencia de Fibonacci
   */
  describe('fibonacci()', () => {
    test('should generate fibonacci sequence correctly', () => {
      // Secuencia de 5 elementos
      expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
      
      // Secuencia de 8 elementos
      expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('should handle edge cases', () => {
      // Caso base: n = 0 debe retornar array vacío
      expect(fibonacci(0)).toEqual([]);
      
      // Caso base: n = 1 debe retornar [0]
      expect(fibonacci(1)).toEqual([0]);
      
      // Secuencia de 2 elementos
      expect(fibonacci(2)).toEqual([0, 1]);
    });

    test('should validate input types', () => {
      // Input debe ser número
      expect(() => fibonacci('5')).toThrow('Input must be a non-negative number');
      expect(() => fibonacci(null)).toThrow('Input must be a non-negative number');
      expect(() => fibonacci(undefined)).toThrow('Input must be a non-negative number');
    });

    test('should reject negative numbers', () => {
      // No acepta números negativos
      expect(() => fibonacci(-1)).toThrow('Input must be a non-negative number');
      expect(() => fibonacci(-10)).toThrow('Input must be a non-negative number');
    });
  });

  /**
   * Suite: quickSort()
   * Valida el ordenamiento correcto usando Quick Sort
   */
  describe('quickSort()', () => {
    test('should sort arrays correctly', () => {
      // Array desordenado con duplicados
      expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
      
      // Array simple desordenado
      expect(quickSort([5, 2, 8, 1])).toEqual([1, 2, 5, 8]);
      
      // Array ya ordenado
      expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      
      // Array en orden inverso
      expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle edge cases', () => {
      // Array vacío
      expect(quickSort([])).toEqual([]);
      
      // Array con un solo elemento
      expect(quickSort([1])).toEqual([1]);
      
      // Array con dos elementos
      expect(quickSort([2, 1])).toEqual([1, 2]);
    });

    test('should handle arrays with duplicates', () => {
      // Todos los elementos iguales
      expect(quickSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
      
      // Varios duplicados mezclados
      expect(quickSort([3, 1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3, 3]);
    });

    test('should validate input types', () => {
      // Input debe ser array
      expect(() => quickSort('not array')).toThrow('Input must be an array');
      expect(() => quickSort(123)).toThrow('Input must be an array');
      expect(() => quickSort(null)).toThrow('Input must be an array');
      expect(() => quickSort(undefined)).toThrow('Input must be an array');
    });
  });

  /**
   * Suite: binarySearch()
   * Valida la búsqueda binaria en arrays ordenados
   */
  describe('binarySearch()', () => {
    test('should find elements at different positions', () => {
      const sortedArray = [1, 2, 3, 4, 5];
      
      // Elemento en el medio
      expect(binarySearch(sortedArray, 3)).toBe(2);
      
      // Primer elemento
      expect(binarySearch(sortedArray, 1)).toBe(0);
      
      // Último elemento
      expect(binarySearch(sortedArray, 5)).toBe(4);
      
      // Segundo elemento
      expect(binarySearch(sortedArray, 2)).toBe(1);
    });

    test('should return -1 when element not found', () => {
      const sortedArray = [1, 2, 3, 4, 5];
      
      // Elemento mayor que todos
      expect(binarySearch(sortedArray, 6)).toBe(-1);
      
      // Elemento menor que todos
      expect(binarySearch(sortedArray, 0)).toBe(-1);
      
      // Elemento que estaría en el medio
      expect(binarySearch([1, 3, 5, 7], 4)).toBe(-1);
    });

    test('should handle edge cases', () => {
      // Array vacío
      expect(binarySearch([], 1)).toBe(-1);
      
      // Array con un elemento (encontrado)
      expect(binarySearch([5], 5)).toBe(0);
      
      // Array con un elemento (no encontrado)
      expect(binarySearch([5], 3)).toBe(-1);
    });

    test('should validate input types', () => {
      // Primer parámetro debe ser array
      expect(() => binarySearch('not array', 3)).toThrow('Input must be an array');
      expect(() => binarySearch(123, 3)).toThrow('Input must be an array');
      
      // Segundo parámetro debe ser número
      expect(() => binarySearch([1, 2, 3], '3')).toThrow('Target must be a number');
      expect(() => binarySearch([1, 2, 3], null)).toThrow('Target must be a number');
      expect(() => binarySearch([1, 2, 3], undefined)).toThrow('Target must be a number');
    });
  });
});
