// --- Function 1 ---
/**
 * Valida si un tablero de Sudoku es válido.
 * @param {number[][]} board - Matriz 9x9 representando el tablero de Sudoku.
 * @returns {boolean} True si el tablero es válido, false en caso contrario.
 * @throws {Error} Si la entrada no es un arreglo.
 */
function sudokuValidator(board) {
  if (!Array.isArray(board)) throw new Error('Input must be an array');
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();
    for (let j = 0; j < 9; j++) {
      if (row.has(board[i][j])) return false;
      row.add(board[i][j]);
      if (col.has(board[j][i])) return false;
      col.add(board[j][i]);
      const boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const boxCol = 3 * (i % 3) + (j % 3);
      if (box.has(board[boxRow][boxCol])) return false;
      box.add(board[boxRow][boxCol]);
    }
  }
  return true;
}

// --- Function 2 ---
/**
 * Encuentra el camino más corto entre dos puntos en una matriz usando BFS.
 * @param {number[][]} matrix - Matriz de 0s (camino libre) y 1s (obstáculo).
 * @param {[number, number]} start - Coordenadas de inicio [fila, columna].
 * @param {[number, number]} end - Coordenadas de destino [fila, columna].
 * @returns {Array<[number, number]>} El camino como arreglo de coordenadas, vacío si no hay camino.
 * @throws {Error} Si la entrada no es un arreglo.
 */
function pathfinder(matrix, start, end) {
  if (!Array.isArray(matrix)) throw new Error('Input must be an array');
  const rows = matrix.length;
  const cols = matrix[0].length;
  const queue = [[...start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [row, col, path] = queue.shift();
    if (row === end[0] && col === end[1]) return path;

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (const [dr, dc] of dirs) {
      const newRow = row + dr;
      const newCol = col + dc;
      const key = [newRow, newCol].toString();

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] === 0 &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([newRow, newCol, [...path, [newRow, newCol]]]);
      }
    }
  }
  return [];
}

// --- Function 3 ---
/**
 * Implementa un cache LRU (Least Recently Used).
 * @param {number} capacity - Capacidad máxima del cache.
 * @returns {{get: function(string|number): any, put: function(string|number, any): void}} API del cache LRU.
 * @throws {Error} Si la capacidad no es un número positivo.
 */
function lruCache(capacity) {
  if (typeof capacity !== 'number' || capacity < 1)
    throw new Error('Capacity must be a positive number');
  const cache = new Map();

  return {
    get: function (key) {
      if (!cache.has(key)) return -1;
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    },
    put: function (key, value) {
      if (cache.has(key)) cache.delete(key);
      cache.set(key, value);
      if (cache.size > capacity) {
        cache.delete(cache.keys().next().value);
      }
    },
  };
}

module.exports = { sudokuValidator, pathfinder, lruCache };