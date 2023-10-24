/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = new Map();

  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const visited = new Array(n).fill(false);

  // DFS function
  function dfs(node) {
    if (node === destination) {
      return true;
    }
    visited[node] = true;

    if (graph.has(node)) {
      for (const neighbor of graph.get(node)) {
        if (!visited[neighbor] && dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(source);
};
