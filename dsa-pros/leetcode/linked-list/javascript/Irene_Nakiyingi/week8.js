//1. https://leetcode.com/problems/design-linked-list/description/
/* Some helpful notes
get() doesn't check if the index is invalid.
addAtTail() cannot handle empty list well.
addAtIndex() cannot handle insertion to before 0-th node (head) well.
addAtIndex() cannot handle index greater than the length well.
deleteAtIndex() cannot handle deletion of 0-th node (head) well.
deleteAtIndex() donesn't check if the index is valid.
*/



//2. https://leetcode.com/problems/merge-two-sorted-lists/

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

 //sorted in ascending order? non decreasing
 //return head of SORTED merged linked list
 //recursion since lists are already sorted
 var mergeTwoLists = function(list1, list2) {
    //if nay is null return the other
    if(list1 == null){
        return list2;
    }
    if(list2 == null){
        return list1;
    }
    //iterating through list1 ans 2
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};


//3. https://leetcode.com/problems/intersection-of-two-linked-lists/description/
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
    
    /* 
    O M*N complexity
    while(headB != null ){
         let nodeA = headA;
         while (nodeA != null){
             if(nodeA == headB){
                return headB;
             } else{
                 nodeA = nodeA.next;
             }
         }
         headB = headB.next;
     }
     //otherwise return null;
     return null;*/

     // O(m+n) complexity
     let nodeA = headA;
     let nodeB = headB;
     if(nodeA == null || nodeB == null){
         //if head of list 1 or list 2 is null
         return null;
     }
     //if vals at heads not equal
     while(nodeA != nodeB){
         //iterate to next value
         nodeA = nodeA.next;
         nodeB = nodeB.next;
         if(nodeA == nodeB){
         //if theyre equal at that point
             return nodeA;
         }
         //reassign head if any are null
         if(nodeA == null){
             nodeA = headB;
         }
         if(nodeB == null){
             nodeB = headA;
         }
     }
     // if equal
     return nodeA;
     
 
 };