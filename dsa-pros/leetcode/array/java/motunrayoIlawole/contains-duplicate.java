import java.util.Arrays;
import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> uniqueNums = new HashSet<Integer>();

        for (int i = 0; i < nums.length; i++) {
            uniqueNums.add(nums[i]);
        }

        if (uniqueNums.size() == nums.length) {
            return false;
        }

        return true;
        
    }
}

class Solution2 {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i+1]) {
                return true;
            }
        }

        return false;
        
    }
}