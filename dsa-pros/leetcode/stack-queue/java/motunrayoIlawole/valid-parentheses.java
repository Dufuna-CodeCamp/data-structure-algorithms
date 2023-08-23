import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        char[] ch = s.toCharArray();
        Stack<Character> characters = new Stack<Character>();

        for (int i = 0; i < ch.length; i++) {
            if (ch[i] == '(' || ch[i] == '{' || ch[i] == '[') {
                characters.push(ch[i]);
            } else if (ch[i] == ')') {
                if (characters.isEmpty() || characters.pop() != '(') {
                    return false;
                }
            } else if (ch[i] == '}') {
                if (characters.isEmpty() || characters.pop() != '{') {
                    return false;
                }
            } else if (ch[i] == ']') {
                if (characters.isEmpty() || characters.pop() != '[') {
                    return false;
                }
            }
        }

        return characters.isEmpty();
    }
}