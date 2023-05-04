/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Sum of Left Leaves
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left
 * child of another node.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;

  function traverse(node, isLeftChild) {
      if (!node.left && !node.right && isLeftChild) sum += node.val;
      if (node.left) traverse(node.left, true);
      if (node.right) traverse(node.right, false);
  }

  traverse(root, false);
  return sum;
};