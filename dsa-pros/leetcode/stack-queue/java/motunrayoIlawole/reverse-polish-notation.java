import java.util.Stack;

class Solution {
    public int evalRPN(String[] tokens) {

        Stack<Integer> operands = new Stack<Integer>();

        for (int i = 0; i < tokens.length; i++) {
            String token = tokens[i];

            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int b = operands.pop();
                int a = operands.pop();

                operands.push(calculateTokens(a, b, token));


            } else {
                operands.push(Integer.valueOf(token));
            }

        }
        return operands.pop();    
    }

    public int calculateTokens(int operand1, int operand2, String operator) {
        if(operator.equals("+")){
            return operand1 + operand2;
        } else if(operator.equals("-")){
            return operand1 - operand2;
        } else if(operator.equals("/")){
            return operand1 / operand2;
        } else {
            return operand1 * operand2;
        }
    } 
}
