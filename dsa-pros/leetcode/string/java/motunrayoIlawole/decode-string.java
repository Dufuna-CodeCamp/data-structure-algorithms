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


// Create a stack to hold all the characters
// Loop through the string
// If the current character is not "]" i.e end of the substring that is the be repeated, push it to the stack
// If we get to a character that is "]", then it means we have the complete substring that should be repeated.
// Don't push it to the stack
// Extract all the characters before the opening brackets - those make up the substring
// Remove the opening bracket
// Get the digit - n
// Add the substring n times back to the stack