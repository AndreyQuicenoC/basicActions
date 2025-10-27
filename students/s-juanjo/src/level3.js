// --- Function 1 ---
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
