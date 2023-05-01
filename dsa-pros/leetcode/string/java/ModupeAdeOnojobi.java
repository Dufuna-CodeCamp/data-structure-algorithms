import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Stack;

/*-------------------------------------------------------------------------
1. Valid Palindrome
-------------------------------------------------------------------------- */

class Palindrome {
    public boolean isPalindrome(String s) {
        String cleanedStr = s.toLowerCase().replaceAll("[^a-z0-9]+", "");

        StringBuilder reversed = new StringBuilder();
        for (int i = cleanedStr.length() - 1; i >= 0; i--) {
            reversed.append(cleanedStr.charAt(i));
        }

        return cleanedStr.equals(reversed.toString());

    }
}

/*-------------------------------------------------------------------------
2. Valid Anagram
-------------------------------------------------------------------------- */

class Anagram {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        return sortString(s).equals(sortString(t));

    }

    private String sortString(String s) {
        char chars[] = s.toCharArray();
        Arrays.sort(chars);
        return String.valueOf(chars);
    }
}

/*-------------------------------------------------------------------------
3. Longest substring without repeating characters
-------------------------------------------------------------------------- */

class LongestSubstring {
    public int lengthOfLongestSubstring(String s) {

        List<Character> temp = new ArrayList<>();
        int longest = 0;

        for (int i = 0; i < s.length(); i++) {
            while (temp.contains(s.charAt(i))) {
                temp.remove(0);
            }
            temp.add(s.charAt(i));
            longest = Integer.max(longest, temp.size());

        }
        return longest;

    }
}

/*-------------------------------------------------------------------------
4. Substring with concatenation of all words
-------------------------------------------------------------------------- */

class Substring {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> indices = new ArrayList<>();
        if (s == null || words == null || words.length == 0) {
            return indices;
        }
        int n = s.length();
        int m = words.length;
        int k = words[0].length();
        Map<String, Integer> count = new HashMap<>();
        for (String word : words) {
            count.put(word, count.getOrDefault(word, 0) + 1);
        }
        for (int i = 0; i <= n - m * k; i++) {
            Map<String, Integer> seen = new HashMap<>();
            int j = 0;
            while (j < m) {
                String word = s.substring(i + j * k, i + (j + 1) * k);
                if (!count.containsKey(word)) {
                    break;
                }
                seen.put(word, seen.getOrDefault(word, 0) + 1);
                if (seen.get(word) > count.getOrDefault(word, 0)) {
                    break;
                }
                j++;
            }
            if (j == m) {
                indices.add(i);
            }
        }
        return indices;

    }
}

/*-------------------------------------------------------------------------
5. Valid palindrone 2
-------------------------------------------------------------------------- */

class ValidPalindrome2 {
    public boolean validPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i <= j) {
            if (s.charAt(i) == s.charAt(j)) {
                i++;
                j--;
            } else
                return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }
        return true;
    }

    public boolean isPalindrome(String s, int i, int j) {
        while (i <= j) {
            if (s.charAt(i) == s.charAt(j)) {
                i++;
                j--;
            } else
                return false;
        }
        return true;
    }
}

/*-------------------------------------------------------------------------
6. Optimal partition of string
-------------------------------------------------------------------------- */

class OptimalPartition {
    public int partitionString(String s) {
        int count = (s.isEmpty()) ? 0 : 1;

        s = s.toLowerCase();
        HashSet<Character> letter = new HashSet<Character>();
        
        for (int i = 0; i < s.length(); i++) {
            if (letter.contains(s.charAt(i))) {
                letter.clear();
                count++;
            }

            letter.add(s.charAt(i));
        }
        return count;

    }
}

/*-------------------------------------------------------------------------
7. Decode string
-------------------------------------------------------------------------- */

class DecodeString {
    public String decodeString(String s) {
        Stack<Integer> numberStack = new Stack<>();
        Stack<StringBuilder> stringBuilderStack = new Stack<>();
        StringBuilder currentStringBuilder = new StringBuilder();
        int currentNumber = 0;

        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                currentNumber = currentNumber * 10 + c - '0';
            } else if (c == '[') {
                stringBuilderStack.push(currentStringBuilder);
                currentStringBuilder = new StringBuilder();
                numberStack.push(currentNumber);
                currentNumber = 0;
            } else if (c == ']') {
                StringBuilder temp = currentStringBuilder;
                currentStringBuilder = stringBuilderStack.pop();
                int count = numberStack.pop();

                while (count-- > 0) {
                    currentStringBuilder.append(temp);
                }
            } else {
                currentStringBuilder.append(c);
            }
        }

        return currentStringBuilder.toString();
    }
}

/*
 * currentNumber = currentNumber * 10 + c - '0';
 * This calculation effectively converts the ASCII code of the digit character
 * to its corresponding numerical value
 * 
 * For example, if c is the character '3', then its ASCII code is 51.
 * The ASCII code of '0' is 48. So, c - '0' is equal to 3, which is the
 * numerical value of the digit '3'.
 */



/*-------------------------------------------------------------------------
8. Split a String in Balanced Strings
-------------------------------------------------------------------------- */

class BalancedStringSplit {
    public int balancedStringSplit(String s) {
        int countR = 0, countL = 0, count = 0;

        for (int i = 0; i < s.length(); i++) {

            if (s.charAt(i) == 'R') {
                countR++;
            } else if (s.charAt(i) == 'L') {
                countL++;
            }

            if (countL == countR) {
                count++;
            }

        }
        
        return count;
    }
}


/*-------------------------------------------------------------------------
9. Multiply Strings
-------------------------------------------------------------------------- */

class Solution {
    public String multiply(String num1, String num2) {
        List<Integer> one1 = new ArrayList<>();
        List<Integer> one2 = new ArrayList<>();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < num1.length(); i++) {
            one1.add(num1.charAt(i) - '0');
            // System.out.println(num1.charAt(i));
        }

        for (int i = 0; i < num2.length(); i++) {
            one2.add(num2.charAt(i) - '0');
        }


        for (int i = 0; i < one1.size(); i++) {
            int product = one1.get(i) * one2.get(i);
            result.append(product);
        }

        // total = one * two;
        System.out.println(one1 + " : " + one2);
        return result.toString();

    }
}

/*-------------------------------------------------------------------------
10. Reorganize String
-------------------------------------------------------------------------- */


/*-------------------------------------------------------------------------
11. Regular Expression Matching
-------------------------------------------------------------------------- */