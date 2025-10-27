/**
 * Level 3 - Algorithms and Metrics
 * Student: s-student4
 */

// --- Function 1 ---
function caesarCipher(text, shift) {
  if (typeof text !== 'string') throw new Error('Text must be a string');
  if (typeof shift !== 'number') throw new Error('Shift must be a number');
  return text.replace(/[a-z]/gi, char => {
    const code = char.charCodeAt(0);
    const base = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + shift) % 26) + base);
  });
}

// --- Function 2 ---
function knapsackProblem(weights, values, capacity) {
  if (!Array.isArray(weights) || !Array.isArray(values)) throw new Error('Weights and values must be arrays');
  if (typeof capacity !== 'number') throw new Error('Capacity must be a number');
  const n = weights.length;
  const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}

// --- Function 3 ---
function powerSet(arr) {
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  const result = [[]];
  for (const element of arr) {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      result.push([...result[i], element]);
    }
  }
  return result;
}

module.exports = { caesarCipher, knapsackProblem, powerSet };
