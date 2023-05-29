class Solution {
    public void moveZeroes(int[] nums) {

        int nonZeroPosition = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int temp = nums[nonZeroPosition];
                nums[nonZeroPosition] = nums[i];
                nums[i] = temp;
                nonZeroPosition++;
            }
        }
        
    }
}