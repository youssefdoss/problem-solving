/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Reorder List
 *
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // Split into two halves
  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
  }

  // Reverse second half
  let prev = null
  let cur = slow.next
  while (cur) {
      let temp = cur.next
      cur.next = prev
      prev = cur
      cur = temp
  }

  slow.next = null

  // Combine two halves
  let h1 = head
  let h2 = prev

while (h2) {
      let temp = h1.next
      h1.next = h2
      h1 = h2
      h2 = temp
  }
};