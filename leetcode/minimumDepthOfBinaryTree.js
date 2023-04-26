/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Minimum Depth of Binary Tree
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  let stack = [[root, 1]];
  let minDepth = Infinity;

  while (stack.length) {
      const [node, depth] = stack.pop();
      if (!node.left && !node.right) {
          minDepth = Math.min(minDepth, depth);
      } else {
          if (node.left) {
              stack.push([node.left, depth + 1]);
          }
          if (node.right) {
              stack.push([node.right, depth + 1]);
          }
      }
  }

  return minDepth;
};