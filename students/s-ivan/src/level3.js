/**
 * Level 3 - Advanced Functions
 * Student: s-ivan
 * 
 * This module contains advanced algorithm implementations:
 * - Dynamic programming (Levenshtein Distance)
 * - Graph algorithms (Dijkstra's shortest path)
 * - Recursive algorithms (Tower of Hanoi)
 * 
 * All functions include input validation and error handling.
 */

// Constantes para mensajes de error
const ERROR_MESSAGES = {
  NOT_A_STRING: 'parameter must be a string',
  NOT_AN_OBJECT: 'Graph must be an object',
  NOT_A_NUMBER: 'must be a number',
  EMPTY_GRAPH: 'Graph cannot be empty',
  NODE_NOT_EXISTS: 'Start node does not exist in graph',
  POSITIVE_NUMBER: 'Number of disks must be positive',
  INTEGER_REQUIRED: 'Number of disks must be an integer',
};

// Constantes para Tower of Hanoi
const DEFAULT_RODS = {
  SOURCE: 'A',
  DESTINATION: 'C',
  AUXILIARY: 'B',
};

// Constantes para Dijkstra
const INITIAL_DISTANCE = 0;
const INFINITE_DISTANCE = Infinity;

/**
 * Calculates the Levenshtein distance between two strings
 * (minimum number of single-character edits needed to change one word into another)
 * 
 * Algorithm:
 * 1. Validates inputs are strings
 * 2. Uses dynamic programming matrix
 * 3. Calculates edit distance
 * 
 * Complexity: O(m*n) where m and n are string lengths
 * 
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} The edit distance
 * @throws {Error} If inputs are not strings
 * 
 * @example
 * levenshteinDistance('kitten', 'sitting') // Returns: 3
 * levenshteinDistance('hello', 'hello')    // Returns: 0
 */
function levenshteinDistance(str1, str2) {
  // 1. Validar tipos de entrada
  if (typeof str1 !== 'string') throw new Error(`First ${ERROR_MESSAGES.NOT_A_STRING}`);
  if (typeof str2 !== 'string') throw new Error(`Second ${ERROR_MESSAGES.NOT_A_STRING}`);
  
  // 2. Validar casos especiales
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  
  // 3. Implementar lógica principal
  const matrix = [];
  
  // Initialize matrix
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j;
  }
  
  // Fill matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,     // deletion
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j - 1] + 1  // substitution
        );
      }
    }
  }
  
  return matrix[str1.length][str2.length];
}

/**
 * Implements Dijkstra's algorithm to find shortest path in a weighted graph
 * 
 * Algorithm:
 * 1. Validates graph structure
 * 2. Uses priority queue approach
 * 3. Returns shortest distances from start node
 * 
 * Complexity: O(V^2) where V is number of vertices
 * 
 * @param {Object} graph - Adjacency list representation {node: {neighbor: weight}}
 * @param {string} start - Starting node
 * @returns {Object} Shortest distances from start to all nodes
 * @throws {Error} If inputs are invalid
 * 
 * @example
 * dijkstra({A: {B: 1, C: 4}, B: {C: 2}, C: {}}, 'A')
 * // Returns: {A: 0, B: 1, C: 3}
 */
function dijkstra(graph, start) {
  validateDijkstraInput(graph, start);
  
  const distances = initializeDistances(graph, start);
  const visited = new Set();
  
  processNodes(graph, distances, visited);
  
  return distances;
}

function validateDijkstraInput(graph, start) {
  if (typeof graph !== 'object' || graph === null) {
    throw new Error(ERROR_MESSAGES.NOT_AN_OBJECT);
  }
  if (typeof start !== 'string') throw new Error(`Start node ${ERROR_MESSAGES.NOT_A_STRING}`);
  if (Object.keys(graph).length === 0) throw new Error(ERROR_MESSAGES.EMPTY_GRAPH);
  if (!graph[start]) throw new Error(ERROR_MESSAGES.NODE_NOT_EXISTS);
}

function initializeDistances(graph, start) {
  const distances = {};
  for (let node in graph) {
    distances[node] = INFINITE_DISTANCE;
  }
  distances[start] = INITIAL_DISTANCE;
  return distances;
}

function processNodes(graph, distances, visited) {
  while (visited.size < Object.keys(graph).length) {
    const minNode = findMinUnvisitedNode(distances, visited);
    if (minNode === null) break;
    
    visited.add(minNode);
    updateNeighborDistances(graph, distances, minNode);
  }
}

function findMinUnvisitedNode(distances, visited) {
  let minNode = null;
  let minDistance = INFINITE_DISTANCE;
  
  for (let node in distances) {
    if (!visited.has(node) && distances[node] < minDistance) {
      minNode = node;
      minDistance = distances[node];
    }
  }
  
  return minNode;
}

function updateNeighborDistances(graph, distances, currentNode) {
  const neighbors = graph[currentNode];
  for (let neighbor in neighbors) {
    const distance = distances[currentNode] + neighbors[neighbor];
    if (distance < distances[neighbor]) {
      distances[neighbor] = distance;
    }
  }
}

/**
 * Solves the Tower of Hanoi puzzle and returns the sequence of moves
 * 
 * Algorithm:
 * 1. Validates input is positive integer
 * 2. Uses recursive divide-and-conquer
 * 3. Returns array of moves
 * 
 * Complexity: O(2^n) where n is number of disks
 * 
 * @param {number} n - Number of disks
 * @param {string} from - Source rod
 * @param {string} to - Destination rod
 * @param {string} aux - Auxiliary rod
 * @returns {Array<string>} Array of move descriptions
 * @throws {Error} If inputs are invalid
 * 
 * @example
 * towerOfHanoi(2, 'A', 'C', 'B')
 * // Returns: ['Move disk from A to B', 'Move disk from A to C', 'Move disk from B to C']
 */
function towerOfHanoi(
  n, 
  from = DEFAULT_RODS.SOURCE, 
  to = DEFAULT_RODS.DESTINATION, 
  aux = DEFAULT_RODS.AUXILIARY
) {
  // 1. Validar tipos de entrada
  if (typeof n !== 'number') throw new Error(`Number of disks ${ERROR_MESSAGES.NOT_A_NUMBER}`);
  if (typeof from !== 'string') throw new Error(`Source rod ${ERROR_MESSAGES.NOT_A_STRING}`);
  if (typeof to !== 'string') throw new Error(`Destination rod ${ERROR_MESSAGES.NOT_A_STRING}`);
  if (typeof aux !== 'string') throw new Error(`Auxiliary rod ${ERROR_MESSAGES.NOT_A_STRING}`);
  
  // 2. Validar casos especiales
  if (n <= 0) throw new Error(ERROR_MESSAGES.POSITIVE_NUMBER);
  if (!Number.isInteger(n)) throw new Error(ERROR_MESSAGES.INTEGER_REQUIRED);
  
  // 3. Implementar lógica principal
  const moves = [];
  
  function solve(disks, source, destination, auxiliary) {
    if (disks === 1) {
      moves.push(`Move disk from ${source} to ${destination}`);
      return;
    }
    
    solve(disks - 1, source, auxiliary, destination);
    moves.push(`Move disk from ${source} to ${destination}`);
    solve(disks - 1, auxiliary, destination, source);
  }
  
  solve(n, from, to, aux);
  return moves;
}

module.exports = {
  levenshteinDistance,
  dijkstra,
  towerOfHanoi,
};
