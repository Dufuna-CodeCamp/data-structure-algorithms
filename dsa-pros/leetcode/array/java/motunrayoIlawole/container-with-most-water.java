class Solution {
    public int maxArea(int[] height) {

        int max = 0;

        for (int i = 0; i < height.length - 1; i++) {
            for (int j = i + 1; j < height.length; j++) {
                int area = (j - i) * Math.min(height[i], height[j]);

                max = Math.max(max, area);
            }
        }

        return max;
        
    }
}

class Solution2 {
    public int maxArea(int[] height) {

        int max = 0;
        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            int area = (right - left) * Math.min(height[left], height[right]);
            max = Math.max(max, area);

            if (height[left] < height[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }

        return max;
        
    }
}