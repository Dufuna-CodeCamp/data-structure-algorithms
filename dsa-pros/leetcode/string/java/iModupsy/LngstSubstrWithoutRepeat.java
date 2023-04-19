import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class LngstSubstrWithoutRepeat {

  
    public static void main(String[] args) {
        String s = "pwwkew";

        int longest = lngSubstring(s);
        int longSubString = longSubString(s);
        //System.out.println(longest);
        System.out.println(longSubString);
    }

    private static int lngSubstring(String s) {
        List temp = new ArrayList<>();
        int longest = 0;

        for (int i = 0; i < s.length(); i++) {
            while (temp.contains(s.charAt(i))) {
                temp.remove(0);
            }
            temp.add(s.charAt(i));
            longest = Math.max(longest, temp.size());


        }
        return longest;
    }

    private static int longSubString(String s) {
        int maxLength = 0;
        int start = 0;
        HashMap<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) {
                start = Math.max(start, map.get(c) + 1);
                System.out.println(start);
            }
            map.put(c, i);
            maxLength = Math.max(maxLength, i - start + 1);
        }
        System.out.println("The length of the longest substring without repeating characters is: " + maxLength);

        return maxLength;
    }
  
}
