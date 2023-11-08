/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

/**********
 APPROACH:-

 * Create an adjacency list representation for our connected nodes.
 * Create a set to store visited nodes.
 * Run DFS (using our adjacency list) from starting node (start):
 * At each stage, add to visited set.
 * Retrieve edges from adjacency list.
 * Return true/false if our visited set has the end input node.
 **********/

const ValidGraphPath = (n, edges, source, destination) => {
  let adjList = {}, visited = [];

  for (const edge of edges){
    adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : adjList[edge[0]] = [edge[1]];

    adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : adjList[edge[1]] = [edge[0]];

  }

  const stack = [source];
  visited[source] = true;

  while(stack.length){
    const current = stack.pop();
    if(current === destination) return true;

    for(let neighbour of adjList[current]) {
      if(!visited[neighbour]){
        stack.push(neighbour);
        visited[neighbour] = true;
      }
    }
  }

  return false;
}

console.log(ValidGraphPath(3, [[0,1],[1,2],[2,0]], 0, 2))