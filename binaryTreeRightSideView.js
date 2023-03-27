/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Binary Tree Right Side View
 *
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let result = [];
  if (root === null) return result;

  function dfs(node, level) {
      if (node === null) return;
      if (result.length === level) result.push(node.val);

      dfs(node.right, level + 1);
      dfs(node.left, level + 1);
  };

  dfs(root, 0);
  return result;
};