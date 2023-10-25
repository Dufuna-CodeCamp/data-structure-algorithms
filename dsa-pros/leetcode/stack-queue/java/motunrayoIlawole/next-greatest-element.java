import java.util.HashMap;

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {

        int[] result = new int[nums1.length];

        HashMap<Integer, Integer> nums2Map = new HashMap<>();

        for (int i = 0; i < nums2.length; i++) {
            nums2Map.put(nums2[i], i);
        }

        for (int i = 0; i < nums1.length; i++) {
            int curr = nums1[i];

            int currIndex = nums2Map.get(curr);


            for (int j = currIndex; j < nums2.length; j++) {
                if (nums2[j] > curr) {
                    result[i] = nums2[j];
                    break;
                } 
            }

            if (result[i] == 0) {
                result[i] = -1;
            }
        }

        return result;
        
    }
}