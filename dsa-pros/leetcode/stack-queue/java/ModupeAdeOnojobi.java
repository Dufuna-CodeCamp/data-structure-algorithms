import java.util.HashMap;
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