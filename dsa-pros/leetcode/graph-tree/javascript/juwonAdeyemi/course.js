/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Create an adjacency list to represent the directed graph
  const graph = new Map();
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(course)) {
      graph.set(course, []);
    }
    graph.get(course).push(prereq);
  }

  // Array to track visited nodes: 0 - not visited, 1 - visiting, 2 - visited
  const visited = new Array(numCourses).fill(0);

  // DFS function to check for cycles
  function hasCycle(course) {
    if (visited[course] === 1) {
      return true; // Cycle detected
    }
    if (visited[course] === 2) {
      return false; // Already visited and not part of a cycle
    }

    visited[course] = 1; // Mark as visiting

    if (graph.has(course)) {
      for (const prereq of graph.get(course)) {
        if (hasCycle(prereq)) {
          return true;
        }
      }
    }

    visited[course] = 2; // Mark as visited and not part of a cycle
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (hasCycle(i)) {
        return false; // Cycle detected, can't finish all courses
      }
    }
  }

  return true; // No cycle detected, can finish all courses
};
