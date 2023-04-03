/**
 * Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let left = head;
  let right = head;

  for (let i = 0; i < n; i++) {
      right = right.next;
  }

  if (!right) {
      return head.next;
  }

  while (right.next) {
      left = left.next;
      right = right.next;
  }

  left.next = left.next.next;

  return head;
};