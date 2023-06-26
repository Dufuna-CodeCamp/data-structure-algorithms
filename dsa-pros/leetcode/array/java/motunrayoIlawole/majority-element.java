import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

class Solution {
    public List<Integer> majorityElement(int[] nums) {

        HashMap<Integer, Integer> numCount = new HashMap<Integer, Integer>();
        ArrayList<Integer> result = new ArrayList<Integer>();

        int count = nums.length/3;

        for (int i = 0; i < nums.length; i++) {
            if (numCount.get(nums[i]) != null) {
                numCount.put(nums[i], numCount.get(nums[i]) + 1);
            } else {
                numCount.put(nums[i], 1);
            }
        }

        for (int i : numCount.keySet()) {
            if (numCount.get(i) > count) {
                result.add(i);
            }
        }

        return result;
        
    }
}