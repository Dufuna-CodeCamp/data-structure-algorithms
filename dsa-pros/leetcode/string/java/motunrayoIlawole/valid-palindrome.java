class Solution {
    public boolean isPalindrome(String s) {
        // Remove all special characters and convert to lower case for consistency
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        // Reverse the string
        String reversedStr = "";

        for (int i = s.length() - 1; i >= 0; i--) {
            reversedStr += s.charAt(i);
        }

        System.out.println(reversedStr);
        if (s.equals(reversedStr)) {
            return true;
        } else {
            return false;
        }
    }
}