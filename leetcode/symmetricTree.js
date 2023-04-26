/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Symmetric Tree
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  function dualTraverse(node1, node2) {
      if (!node1 && !node2) return true;
      if (!node1 || !node2 || node1.val !== node2.val) return false;
      return dualTraverse(node1.left, node2.right) && dualTraverse(node1.right, node2.left);
  }
  return dualTraverse(root.left, root.right);
};