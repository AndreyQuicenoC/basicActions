/**
 * Level 3 - Algorithms and Metrics
 * Student: s-andrey
 * 
 * Este módulo implementa algoritmos más avanzados incluyendo:
 * - Generación de secuencias (Fibonacci)
 * - Algoritmos de ordenamiento (Quick Sort)
 * - Algoritmos de búsqueda (Binary Search)
 */

/**
 * Valida que el input sea un número no negativo.
 * 
 * @param {*} n - Valor a validar
 * @throws {Error} Si n no es un número o es negativo
 */
function validateFibonacciInput(n) {
  if (typeof n !== 'number') {
    throw new Error('Input must be a non-negative number');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative number');
  }
}

/**
 * Genera una secuencia de Fibonacci con n elementos.
 * 
 * Algoritmo:
 * 1. Valida que el input sea un número no negativo
 * 2. Maneja casos base (n=0 retorna [], n=1 retorna [0])
 * 3. Inicializa array con [0, 1]
 * 4. Itera desde i=2 hasta n, agregando la suma de los dos últimos elementos
 * 5. Retorna el array completo
 * 
 * Análisis de Complejidad:
 * - Temporal: O(n) - Un solo loop que itera n-2 veces
 * - Espacial: O(n) - Array que almacena n elementos
 * 
 * @param {number} n - Cantidad de números de Fibonacci a generar (debe ser >= 0)
 * @returns {number[]} Array con los primeros n números de Fibonacci
 * @throws {Error} Si n no es un número o es negativo
 * 
 * @example
 * fibonacci(5);  // [0, 1, 1, 2, 3]
 * fibonacci(0);  // []
 * fibonacci(1);  // [0]
 * fibonacci(8);  // [0, 1, 1, 2, 3, 5, 8, 13]
 */
function fibonacci(n) {
  validateFibonacciInput(n);
  
  if (n === 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

/**
 * Ordena un array de números usando el algoritmo Quick Sort.
 * 
 * Algoritmo:
 * 1. Valida que el input sea un array
 * 2. Caso base: arrays de 0 o 1 elementos ya están ordenados
 * 3. Selecciona pivot (elemento del medio)
 * 4. Particiona el array en tres subarrays:
 *    - left: elementos menores que pivot
 *    - middle: elementos iguales a pivot
 *    - right: elementos mayores que pivot
 * 5. Aplica recursivamente quickSort a left y right
 * 6. Concatena [sorted(left), middle, sorted(right)]
 * 
 * Análisis de Complejidad:
 * - Temporal: O(n log n) promedio, O(n²) peor caso
 * - Espacial: O(n log n) por la recursión y arrays temporales
 * 
 * @param {number[]} arr - Array de números a ordenar
 * @returns {number[]} Nuevo array ordenado de menor a mayor
 * @throws {Error} Si el input no es un array
 * 
 * @example
 * quickSort([3, 1, 4, 1, 5]);  // [1, 1, 3, 4, 5]
 * quickSort([5, 2, 8, 1]);     // [1, 2, 5, 8]
 * quickSort([]);               // []
 */
function quickSort(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

/**
 * Valida los inputs de búsqueda binaria.
 * 
 * @param {*} arr - Array a validar
 * @param {*} target - Target a validar
 * @throws {Error} Si arr no es un array o target no es un número
 */
function validateBinarySearchInput(arr, target) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  if (typeof target !== 'number') {
    throw new Error('Target must be a number');
  }
}

/**
 * Busca un elemento en un array ordenado usando búsqueda binaria.
 * 
 * Algoritmo:
 * 1. Valida que arr sea array y target sea número
 * 2. Inicializa punteros left=0 y right=arr.length-1
 * 3. Mientras left <= right:
 *    a. Calcula mid = floor((left + right) / 2)
 *    b. Si arr[mid] === target, retorna mid (encontrado)
 *    c. Si arr[mid] < target, busca en mitad derecha (left = mid + 1)
 *    d. Si arr[mid] > target, busca en mitad izquierda (right = mid - 1)
 * 4. Si no se encuentra, retorna -1
 * 
 * IMPORTANTE: El array debe estar ordenado para que funcione correctamente.
 * 
 * Análisis de Complejidad:
 * - Temporal: O(log n) - Divide el espacio de búsqueda a la mitad en cada iteración
 * - Espacial: O(1) - Solo usa variables auxiliares
 * 
 * @param {number[]} arr - Array ordenado de números donde buscar
 * @param {number} target - Número a buscar en el array
 * @returns {number} Índice del elemento si se encuentra, -1 si no existe
 * @throws {Error} Si arr no es un array o target no es un número
 * 
 * @example
 * binarySearch([1, 2, 3, 4, 5], 3);  // 2
 * binarySearch([1, 2, 3, 4, 5], 1);  // 0
 * binarySearch([1, 2, 3, 4, 5], 6);  // -1
 */
function binarySearch(arr, target) {
  validateBinarySearchInput(arr, target);
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

module.exports = {
  fibonacci,
  quickSort,
  binarySearch
};
  