// wednesday 
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // to each child at index i we add them extraCandies
    //
    let n = candies.length;
    let maxCandies = Math.max(...candies);
    let emptyArray = new Array(n);
    
    for(var i =0; i<n; i++){
        if(candies[i]+ extraCandies >= maxCandies){
            emptyArray[i]= true;
        }else{
            emptyArray[i] = false;
        }
    }
    return emptyArray;
};

//week11 issues
//2 https://leetcode.com/problems/reverse-linked-list/
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
 // just in case A linked list can be reversed either iteratively or recursively. Could you implement both?
 //head was the last node/ most recent node to be added
 var reverseList = function(head) {
    //methid1 - iterative ie move stepwise
    // we have head
    // we need to define prev, next, head>? is current node?
    //time O(N); Depending on size of list // space O(1); returns single vale ie current/head
    var current = head;
    var prev = null;
    var next = null;
    while(current != null){ // current is head 
        //redefine the other variables
        next = current.next;
        current.next =prev;
        prev =current;
        current = next;
    }
    head = prev;
    return head;

    //method 2- recursion


};

//3 https://leetcode.com/problems/linked-list-cycle/
// passed at run; failed in submission -> solved
//time 73ms   memory 44.91mb
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //what? contraint O(1) space complexity? Floyd’s Tortoise and Hare algorithm
    // O(n); cycles and stores the nodes
    // using next to find pos? where pos is index of next?
    // hare is the fast pointer, moves 2 steps ie next next while tortoise uses one step(slow)

    let slow = head;
    let fast = head;
    while(fast && fast.next){
        //started by moving fast at head and one step ahead
        //had error until redefined vars slow and fast below
        slow = slow.next;
        fast= fast.next.next;
        //if the two meet
        if(fast == slow){ // ie where pos matches
            return true;
        } // else statement here returns error
    }
    return false;
};
//4 https://leetcode.com/problems/delete-node-in-a-linked-list/
//?

//5 https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//?