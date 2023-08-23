import java.util.Stack;

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        int arraylen = pushed.length;

        // Store the number of popped elements
        int poppedCount = 0;

        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < arraylen; i++) {
            stack.push(pushed[i]);

            while(!stack.empty() && poppedCount < arraylen && stack.peek() == popped[poppedCount]) {
                stack.pop();
                poppedCount++;
            }
        }

        return poppedCount == arraylen;
        
    }
}

// pushed = [1,2,3,4,5], popped = [4,5,3,2,1]

/**
 * i = 0, poppedCount = 0
 * stack.push(1)
 * 
 * stack.peek() = 1
 * stack.peek() == popped[poppedCount] ? NO
 * 
 * i = 1, poppedCount = 0
 * stack.push(2)
 * 
 * stack.peek() = 2
 * stack.peek() == popped[poppedCount] ? NO
 * 
 * i = 2, poppedCount = 0
 * stack.push(3)
 * 
 * stack.peek() = 3
 * stack.peek() == popped[poppedCount] ? N0
 * 
 * i = 3, poppedCount = 0
 * stack.push(4)
 * 
 * stack.peek() = 4
 * stack.peek() == popped[poppedCount] ? Yes
 * stack.pop() = 4
 * poppedCount = 1
 * 
 * stack.peek() = 3
 * stack.peek() == popped[poppedCount] ? No
 * 
 * i = 4, poppedCount = 1
 * stack.push(5)
 * 
 * stack.peek() = 5
 * stack.peek() == popped[poppedCount] ? Yes
 * stack.pop() = 5
 * poppedCount = 2
 * 
 * stack.peek() = 3
 * stack.peek() == popped[poppedCount] ? Yes
 * stack.pop() = 3
 * poppedCount = 3
 * 
 * stack.peek() = 2
 * stack.peek() == popped[poppedCount] ? Yes
 * stack.pop() = 2
 * poppedCount = 4
 * 
 * stack.peek() = 1
 * stack.peek() == popped[poppedCount] ? Yes
 * stack.pop() = 1
 * poppedCount = 5
 * 
 * Stack is now empty
 * 
 * poppedCount = 5
 * arrayLen = 5
 * true
 * 
 * 
 * 
 */