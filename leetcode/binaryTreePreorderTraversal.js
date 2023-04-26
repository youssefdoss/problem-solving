/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Binary Tree Preorder Traversal
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * values.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];

  function traverse(node) {
      if (!node) return;
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
  }

  traverse(root);
  return result;
};