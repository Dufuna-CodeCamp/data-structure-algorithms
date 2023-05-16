class Solution {
    public int balancedStringSplit(String s) {

        int r = 0;
        int l = 0;
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == 'R') r++;
            else if (c == 'L') l++;

            if (r == l) {
                count++;
                r = 0;
                l = 0;
            }
        }

        return count;
        
    }
}