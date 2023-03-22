/**
 * Clone Graph
 *
 * Given a reference of a node in a connected undirected graph.
 *
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its
 * neighbors.
 *
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 *
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (node) => {
    const clonedNode = new Node(node.val);
    visited.set(node, clonedNode);

    for (let neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        clonedNode.neighbors.push(dfs(neighbor));
      } else {
        clonedNode.neighbors.push(visited.get(neighbor));
      }
    }

    return clonedNode;
  };

  return dfs(node);
};
