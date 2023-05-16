import java.util.Arrays;


/*-------------------------------------------------------------------------
1. Contains Duplicate
-------------------------------------------------------------------------- */

class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {

        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) return true;
        }
        return false;
    
    }
  
}


/*-------------------------------------------------------------------------
2. Binary Search
-------------------------------------------------------------------------- */
class BinarySearch {
    public int search(int[] nums, int target) {
        int start = 0, end = nums.length - 1;

        while (start <= end) {
            int mid = start + (end - start)/2;

            if (nums[mid] == target) {
                return mid;
            }  
            
            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return -1;
        
    }
}


/*-------------------------------------------------------------------------
3. Rotate Array
-------------------------------------------------------------------------- */

class RotateArray {
    public void rotate(int[] nums, int k) {

        if (k > nums.length) {
           k = k % nums.length; // rotate once
        }

        int index = 0, len = nums.length;
        int[] temp = new int[len];
        int derivedK = len - k; // To rotate carefully, count from the back

        for (int i = derivedK; i < len; i++) {
            temp[index] = nums[i];
            index++;
        }

        for (int i = 0; i < derivedK; i++) {
            temp[index] = nums[i];
            index++;
        }

        for (int i = 0; i < len; i++) {
            nums[i] = temp[i];
        }
        
    }
}


/*-------------------------------------------------------------------------
4. Longest Increasing Subsequence
-------------------------------------------------------------------------- */