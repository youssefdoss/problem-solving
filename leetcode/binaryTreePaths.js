/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Binary Tree Paths
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let paths = [];

  function dfs(node, path) {
      if (!node) return;
      path += node.val;
      if (!node.left && !node.right) {
          paths.push(path);
          return;
      }
      path += '->';
      dfs(node.right, path);
      dfs(node.left, path);
  }

  dfs(root, '');
  return paths;
};