class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int newLength = nums.length * 2;
        int[] newNums = new int[newLength];

        for (int i = 0; i < newLength; i++) {
            newNums[i] = nums[i%nums.length];
        }

        int[] result = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            int curr = newNums[i];
            for (int j = 1; j < newNums.length; j++) {
                if (newNums[j] > curr) {
                    result[i] = newNums[j];
                    break;
                }
                result[i] = -1;
            }
        }

        return result;


    }
}

// Todo: Implement stack solution