/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes'
 * values.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];

  let result = [];

  function traverse(node) {
      if (node.left) {
          traverse(node.left);
      }
      result.push(node.val);
      if (node.right) {
          traverse(node.right);
      }
  }

  traverse(root);
  return result;
};