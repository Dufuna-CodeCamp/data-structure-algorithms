import java.util.HashMap;

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
class Solution {
    public boolean hasCycle(ListNode head) {

        int position = 0;

        HashMap<ListNode, Integer> nodes = new HashMap<ListNode, Integer>();
        // nodes.put(head, position);

        ListNode curr = head;

        while (curr != null) {

            if (nodes.get(curr) != null) {
                return true;
            } else {
                nodes.put(curr, position);
            }

            curr = curr.next;
            position++;

        }

        return false;


        
    }
}