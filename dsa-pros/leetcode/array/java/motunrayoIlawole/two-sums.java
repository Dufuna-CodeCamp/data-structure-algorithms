import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // create a map to store the numbers and their indexes
        HashMap<Integer, Integer> numsHash = new HashMap<Integer, Integer>();

        // create an array to store the results
        int[] result = new int[2];

        for (int i = 0; i < nums.length; i++) {
            // get the differece between the number and the current element
            int diff = target - nums[i];

            // If the difference is already in the map:
            if (numsHash.containsKey(diff)) {
                // then it means you have your two numbers
                result[0] = i;
                result[1] = numsHash.get(diff);
                return result;
            }

            numsHash.put(nums[i], i);
        }

        // return an empty array if there's no result
        return new int[0];
    }
}