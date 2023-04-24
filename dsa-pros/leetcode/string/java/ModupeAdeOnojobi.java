import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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