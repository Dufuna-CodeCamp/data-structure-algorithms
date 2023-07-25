//https://leetcode.com/problems/middle-of-the-linked-list/
//runtime 53ms memory 42.19mb
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
var middleNode = function(head) {
    //define variable for head
    var x = head;
    //create an empty var to store list items
    var emptyList =[];
    while(x != null){
        //as long as head isn't null, add item to empty list
        emptyList.push(x)
        x = x.next
    }
    //determine the absolute middle of the new list and retrun the value there
    var middle = Math.floor(emptyList.length/2)
    return emptyList[middle]

};

//https://leetcode.com/problems/remove-linked-list-elements/
// has errors in progress