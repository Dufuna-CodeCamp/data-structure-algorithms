import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;


/*-------------------------------------------------------------------------
1. Valid Parentensis
-------------------------------------------------------------------------- */

class IsValid {
    public boolean isValid(String s) {
       Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') {
               stack.push(')');
            } else if (c == '[') {
                stack.push(']');
            } else if (c == '{') {
                stack.push('}');
            } else if (stack.isEmpty() || stack.pop() != c) {
                return false;
            }
        }

        return stack.isEmpty();
        
    }
}



/*-------------------------------------------------------------------------
2. Next Greater Element
-------------------------------------------------------------------------- */

class GreaterElement {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] result = new int[nums1.length];

        Stack<Integer> stack = new Stack<>();
        HashMap<Integer, Integer> map = new HashMap<>();


        for(int num: nums2) {

            while(!stack.isEmpty() && num > stack.peek()) {
                map.put(stack.pop(), num);
            }

            stack.add(num);
        }

        int i = 0;
        for(int num : nums1) {
            result[i++] = map.getOrDefault(num, -1);
        }

        return result;
        
    }
}



/*-------------------------------------------------------------------------
3. Final Prices
-------------------------------------------------------------------------- */

class FinalPrice {
    public int[] finalPrices(int[] prices) {
        int priceArr[] = new int[prices.length];
        Stack<Integer> stack = new Stack();

        stack.push(prices[prices.length - 1]);
        priceArr[prices.length - 1] = prices[prices.length - 1];

        for (int i = prices.length - 2; i >= 0; i--) {
            while(!stack.isEmpty() && stack.peek() > prices[i]) {
                stack.pop();
            }

            if(stack.isEmpty()) {
                priceArr[i] = prices[i];
            } else { 

                priceArr[i] = prices[i] - stack.peek();
            }
            
            stack.push(prices[i]);
        }

        return priceArr;
    
    }
}



/*-------------------------------------------------------------------------
4. Number of Recent Calls
-------------------------------------------------------------------------- */

class RecentCounter {

    Queue<Integer> queue;

    public RecentCounter() {
        this.queue = new LinkedList<>();
        
    }
    
    public int ping(int t) {
        queue.add(t);

        while(queue.peek() < t - 3000) {
            queue.poll();
        }

       return queue.size();
        
    }
}


/*-------------------------------------------------------------------------
5. Min Stack
-------------------------------------------------------------------------- */

class MinStack {

    Stack<Integer> stack;
    Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<Integer>();
        minStack = new Stack<Integer>();
    }
    
    

    public void push(int val) {
        stack.push(val);

        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {
        if (stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }
        
        stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}


/*-------------------------------------------------------------------------
6. Simplify Path
-------------------------------------------------------------------------- */

class Solution {
    public String simplifyPath(String path) {
        
        Stack<String> stack = new Stack<>();
        String[] vals = path.split("/");

        for (String val : vals) {
            if (val.equals("..") && !stack.isEmpty()) {
                stack.pop();
            }
            else if (!val.equals("..") && !val.equals(".") && !val.equals("")) 
            {
                stack.push(val);
            }
        }

        return "/" + String.join("/", stack);
    }
}


/*-------------------------------------------------------------------------
7. Evaluate Reverse Polish Notation
-------------------------------------------------------------------------- */

class EvaluatePRN {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        for (String token : tokens) {
             
            if (token.equals("+")) {
                int operand2 = stack.pop();
                int operand1= stack.pop();
                stack.push(operand1 + operand2);
              
            } else if (token.equals("-")) {
                int operand2 = stack.pop();
                int operand1= stack.pop();
                stack.push(operand1 - operand2);

            } else if (token.equals("*")) {
                int operand2 = stack.pop();
                int operand1= stack.pop();
                stack.push(operand1 * operand2);

            } else if (token.equals("/")) {
                int operand2 = stack.pop();
                int operand1 = stack.pop();
                stack.push(operand1 / operand2);

            } else {
                stack.push(Integer.parseInt(token));
            }
        }

        return stack.pop();
    }
}

/*-------------------------------------------------------------------------
8. . Validate Stack Sequences
-------------------------------------------------------------------------- */

class ValidateStack {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> stack = new Stack<>();
        int popIndex = 0;

        for (int num : pushed) {
            stack.push(num);

            while (!stack.isEmpty() && popIndex < popped.length && stack.peek() == popped[popIndex]) {
                stack.pop();
                popIndex++;
            }
        }

        return stack.isEmpty();
        
    }
}


/*-------------------------------------------------------------------------
9.  Next Greater Element II
-------------------------------------------------------------------------- */

class NxtGreaterEle {
    public int[] nextGreaterElements(int[] nums) {
      
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < n * 2; i++) {
            int num = nums[i % n];
            while (!stack.isEmpty() && nums[stack.peek()] < num) {
                result[stack.pop()] = num;
            }
            if (i < n) {
                stack.push(i);
            }
        }
        
        return result;
        
    }
}