
const ListNode = (val, next)  => {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeLinkedListElement = (head, val) => {
  if (!head) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;

  while(curr.next != null){
    if(curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return dummy.next;
};

removeLinkedListElement([6, 1, 2, 3, 5, 6], 6)