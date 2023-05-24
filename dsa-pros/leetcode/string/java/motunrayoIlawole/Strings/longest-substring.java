class Solution {
    public int lengthOfLongestSubstring(String s) {

        if (s.isEmpty()) {
            return 0;
        } else if (s.length() == 1) {
            return 1;
        }

        int currLength = 0;

        for (int i = 0; i < s.length(); i++) {
            String sub = "";

            for (int j = i; j < s.length(); j++) {
                if (sub.indexOf(s.charAt(j)) == -1) {
                    sub += s.charAt(j);
                } else {
                    break;
                }
            }

            currLength = Math.max(sub.length(), currLength);

            System.out.println(sub);
        }

        return currLength;
        
    }
}