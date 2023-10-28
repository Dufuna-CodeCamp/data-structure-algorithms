/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const inDegree = new Array(n + 1).fill(0);
  const outDegree = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    outDegree[a]++;
    inDegree[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i; // This person satisfies the properties of the town judge
    }
  }

  return -1; // No town judge found
};
