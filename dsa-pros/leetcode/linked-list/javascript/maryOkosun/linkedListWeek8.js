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
    let newNode = new ListNode(0); //instantiate a new Node
    let previousNode = newNode; //assign to a variable prevNode = [0]
  
    while (list1 !== null && list2 !== null) { //runs the code while list 1 and list 2 values is not null
      if (list1.val <= list2.val) { //checks of the val of list1 is < /= list2 value
        previousNode.next = list1; //if true, append list1 to the next of the previous node. prevNode = [0,1,2,4]
        list1 = list1.next; // list 1 becomes [2,4] and list1.value becomes 2 while list2.value remains 1
      }
      else { //checks if the val of list1 is greater than list 2
        previousNode.next = list2; //prevNode(second iteration) here is [1,2,4], becomes [1,1,3,4]
        list2 = list2.next;//list 2 becomes [3, 4] and list2.val becomes 3 while list1 is [2, 4] and list1.val is still 2
      }
      previousNode = previousNode.next; //after either the if/else, the prvNode from [0,1,2,4] becomes [1,2,4]
    }
  
    if(list1 !== null){
      previousNode.next = list1
    } 
    if(list2 !== null) {
      previousNode.next = list2
    }
  
    return newNode.next
  };