//Design LinkedList
//JS(singly linked list) 
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addAtHead(val) {
    const new_node = new ListNode(val);
    new_node.next = this.head;
    this.head = new_node;
    this.size++;
  }

  addAtTail(val) {
    const new_node = new ListNode(val);
    if (this.head === null) {
      this.head = new_node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = new_node;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.size) {
      this.addAtTail(val);
    } else {
      const new_node = new ListNode(val);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      new_node.next = curr.next;
      curr.next = new_node;
      this.size++;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }
}


//Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // Check if either list is empty
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  // Initialize a dummy node as the head of the merged list
  const dummy = new ListNode();
  let curr = dummy;

  // Merge the two lists
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // Append any remaining nodes from list1 or list2
  if (list1) {
    curr.next = list1;
  }
  if (list2) {
    curr.next = list2;
  }

  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
};

//Intersection of Two Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
    return null;
  }

  // Find the lengths of the linked lists
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  // Move the pointer of the longer list to make the remaining lengths equal
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      headA = headA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      headB = headB.next;
    }
  }

  // Move both pointers until they meet or reach the end (intersection)
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}

function getLength(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
};