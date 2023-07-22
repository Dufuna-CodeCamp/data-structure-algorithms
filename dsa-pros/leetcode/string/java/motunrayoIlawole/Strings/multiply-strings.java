package Strings;

class Solution {
    public String multiply(String num1, String num2) {
        int l1 = num1.length();
        int l2 = num2.length();

        if (l1 == 0 || l2 == 0) {
            return "0";
        }

        int[] result = new int[l1 + l2];

        int in1 = 0;
        int in2 = 0;

        for (int i = l1 - 1; i >= 0; i--) {
            int carry = 0;
            int n1 = num1.charAt(i) - '0';

            in2 = 0;

            for (int j = l2 - 1; j >= 0; j--) {
                int n2 = num2.charAt(j) - '0';

                int prod = n1 * n2 + result[in1 + in2] + carry;

                carry = prod/10;

                result[in1 + in2] = prod % 10;

                in2++;
            }

            if (carry > 0) {
                result[in1 + in2] += carry;
            }
            in1++;

        }

        int a = result.length - 1;
        while (a >= 0 && result[a] == 0) a--;

        if (a == -1) return "0";

        String s = "";

        while (a >= 0) {
            s += (result[a--]);
        }

        return s;
        
    }
}