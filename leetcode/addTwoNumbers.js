/**
 * Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1String = '';
  let l2String = '';

  let currNode1 = l1;
  let currNode2 = l2;

  while (currNode1) {
      l1String = currNode1.val + l1String;
      currNode1 = currNode1.next;
  }

  while (currNode2) {
      l2String = currNode2.val + l2String;
      currNode2 = currNode2.next;
  }

  let sum = (BigInt(l1String) + BigInt(l2String)).toString().split('');
  let head = new ListNode(parseInt(sum.pop()));
  let currNode = head;

  for (let i = sum.length - 1; i > -1; i--) {
      let node = new ListNode(sum[i]);
      currNode.next = node;
      currNode = node;
  }

  return head;
};