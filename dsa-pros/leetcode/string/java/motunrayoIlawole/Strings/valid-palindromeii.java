class Solution {
    public boolean validPalindrome(String s) {

        int left = 0;
        int right = s.length() - 1;

        if (isPalindrome(s, left, right)) {
            return true;
        }

        while (left < right) {
            if (s.charAt(left) == s.charAt(right)) {
                left++;
                right--;
            }
            // If the characters are no longer the same:
            else {
                // Check if it's a palindrome after skipping the character that is different
                return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
            }
        }

        return true;
    }

    public boolean isPalindrome(String s, int left, int right) {

        while (left < right) {
            // If the characters at the left and right are the same:
            if (s.charAt(left) == s.charAt(right)) {
                // Move to the next characters
                left++;
                right--;
            }
            // If the characters are no longer the same, the word is not a palindrome
            else {
                return false;
            }
        }

        return true;
    }
}