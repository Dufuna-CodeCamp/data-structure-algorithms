/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/********
 * diagram-1

 1 --> 2 --> 3 --> 4 --> 5 --> 6
 c

 * diagram-2
       n
 1 --> 2 --> 3 --> 4 --> 5 --> 6
      pc

 * diagram-3
 f
 1 --> 2 --> 3 --> 4 --> 5 --> 6
 s

 **********/

const reversedLinkedList = (head) => {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;


  while(curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

reversedLinkedList([1,2,3,4,5])