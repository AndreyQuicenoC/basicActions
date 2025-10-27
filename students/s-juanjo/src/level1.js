// --- Function 1 ---
/**
 * Alterna mayúsculas y minúsculas en cada letra de la cadena, comenzando por mayúscula.
 * @param {string} str - Cadena de entrada.
 * @returns {string} Cadena con letras alternadas en mayúsculas y minúsculas.
 * @throws {Error} Si el parámetro no es una cadena.
 */
function alternateCase(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  let result = '';
  let uppercase = true;
  for (const char of str) {
    if (char.match(/[a-z]/i)) {
      result += uppercase ? char.toUpperCase() : char.toLowerCase();
      uppercase = !uppercase;
    } else {
      result += char;
    }
  }
  return result;
}

// --- Function 2 ---
/**
 * Calcula el producto de todos los elementos de un arreglo numérico.
 * @param {number[]} arr - Arreglo de números.
 * @returns {number} Producto de los elementos.
 * @throws {Error} Si el parámetro no es un arreglo.
 */
function productOfArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  return arr.reduce((product, num) => product * num, 1);
}

// --- Function 3 ---
/**
 * Filtra los valores negativos de un arreglo, devolviendo solo los no negativos.
 * @param {number[]} arr - Arreglo de números.
 * @returns {number[]} Arreglo sin valores negativos.
 * @throws {Error} Si el parámetro no es un arreglo.
 */
function filterNegatives(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  return arr.filter((num) => num >= 0);
}

module.exports = { alternateCase, productOfArray, filterNegatives };