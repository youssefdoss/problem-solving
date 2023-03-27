/**
 * Balanced Binary Tree
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) {
      return true;
  }

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};

/**
 * Gets maximum height of a branch from a given node
 *
 * @param {TreeNode} node
 * @return {number}
 */
function getHeight(node) {
  if (node === null) {
      return 0;
  }

  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}