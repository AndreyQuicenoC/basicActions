// --- Function 1 ---
/**
 * Comprime una cadena usando conteo de caracteres consecutivos (run-length encoding).
 * @param {string} str - Cadena de entrada.
 * @returns {string} Cadena comprimida.
 * @throws {Error} Si el parámetro no es una cadena.
 */
function stringCompression(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  if (str.length === 0) return '';
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

// --- Function 2 ---
/**
 * Devuelve el segundo valor más grande de un arreglo numérico.
 * @param {number[]} arr - Arreglo de números.
 * @returns {number} Segundo valor más grande.
 * @throws {Error} Si el parámetro no es un arreglo o tiene menos de 2 elementos.
 */
function secondLargest(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (arr.length < 2) throw new Error('Array must have at least 2 elements');
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}

// --- Function 3 ---
/**
 * Agrupa palabras que son anagramas en subarreglos.
 * @param {string[]} words - Arreglo de palabras.
 * @returns {string[][]} Arreglo de grupos de anagramas.
 * @throws {Error} Si el parámetro no es un arreglo.
 */
function groupAnagrams(words) {
  if (!Array.isArray(words)) throw new Error('Input must be an array');
  const groups = {};
  words.forEach((word) => {
    const sorted = word.split('').sort().join('');
    if (!groups[sorted]) groups[sorted] = [];
    groups[sorted].push(word);
  });
  return Object.values(groups);
}

module.exports = { stringCompression, secondLargest, groupAnagrams };