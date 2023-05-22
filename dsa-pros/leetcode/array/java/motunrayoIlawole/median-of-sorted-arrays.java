import java.util.Arrays;

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        int nums1Len = nums1.length;
        int nums2Len = nums2.length;
        int sum = nums1Len + nums2Len;

        int[] mergedArray = new int[nums1Len + nums2Len];

        for (int i = 0; i < nums1Len; i++) {
            mergedArray[i] = nums1[i];
        }
        for (int i = 0; i < nums2Len; i++) {
            mergedArray[nums1Len + i] = nums2[i];
        }

        Arrays.sort(mergedArray);

        if (sum % 2 == 0) {
            return Double.valueOf((mergedArray[sum/2] + mergedArray[(sum/2) - 1])) / 2;
        } else {
            return mergedArray[(sum / 2)];
        }
        
    }
}