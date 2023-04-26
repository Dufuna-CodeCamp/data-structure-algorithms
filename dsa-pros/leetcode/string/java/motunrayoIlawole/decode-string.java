import java.util.Stack;
import java.util.stream.Collectors;

class Solution {
    public String decodeString(String s) {

        //  create a stack to hold all the characters

        Stack<Character> characters = new Stack<Character>();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != ']') {
                characters.push(s.charAt(i));
            } else {
                String substr = "";
                while (characters.peek() != '[') {
                    substr = characters.pop() + substr;
                }
                characters.pop();

                String n = "";
                while (!characters.isEmpty() && Character.isDigit(characters.peek())) {
                    n = characters.pop() + n;
                }

                System.out.println(n);
                int num = n == ""? 0 : Integer.valueOf(n);
                for (int j = 0; j < num; j++) {
                    for (int k = 0; k < substr.length(); k++) {
                        characters.push(substr.charAt(k));
                    }
                }
            }
        }

        String stStr = characters.stream().map(p -> p.toString()).collect(Collectors.joining(""));
        return stStr;
        
    }
}