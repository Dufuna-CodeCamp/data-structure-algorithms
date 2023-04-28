import java.util.HashMap;

class Solution {
    public boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) {
            return false;
        }

        HashMap<String, Integer> SLetters = new HashMap<String, Integer>();
        HashMap<String, Integer> TLetters = new HashMap<String, Integer>();

        for (int i = 0; i < s.length(); i++) {
            String ch = String.valueOf(s.charAt(i));
            if (SLetters.get(ch) != null) {
                SLetters.put(ch, SLetters.get(ch) + 1);
            } else {
                SLetters.put(ch, 1);
            }
        }

        for (int i = 0; i < t.length(); i++) {
            String ch = String.valueOf(t.charAt(i));
            if (TLetters.get(ch) != null) {
                TLetters.put(ch, TLetters.get(ch) + 1);
            } else {
                TLetters.put(ch, 1);
            }
        }

        for (String i : SLetters.keySet()) {
            if (!SLetters.get(i).equals(TLetters.get(i))) {
                return false;
            }
        }  
        return true;
        
    }
}