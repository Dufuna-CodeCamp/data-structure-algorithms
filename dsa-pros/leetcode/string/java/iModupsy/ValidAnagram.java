import java.util.Arrays;

public class ValidAnagram {

  
    public static void main(String[] args) {
    String s = "anagram";
    String t = "nagaram";

    boolean validAnagram = isValidAnagram(s, t);
    System.out.println(validAnagram);
    }

    private static String sortString(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return String.valueOf(chars);

    }

    private static boolean isValidAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        return sortString(s).equals(sortString(t));
    }
  
}
