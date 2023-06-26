import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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


/*-------------------------------------------------------------------------
5. Remove Element 
-------------------------------------------------------------------------- */
class RemoveElement {
    public int removeElement(int[] nums, int val) {
        int len = nums.length, count = 0;

        for (int i = 0; i < len; i++) {
            if (nums[i] != val) {
                nums[count] = nums[i];
                count++;
            }
            
        }

        return count;
    }
}

/*-------------------------------------------------------------------------
6. Move Zeroes 
-------------------------------------------------------------------------- */

class MoveZeroes {
    public void moveZeroes(int[] nums) {
        int len = nums.length, idx = 0;

        for (int n : nums) {
            if (n != 0) {
                nums[idx] = n;
                idx++;
            }
        }

        for (int i = idx; i < len; i++) {
            nums[i] = 0;
        }
        
    }
}

/*-------------------------------------------------------------------------
7. Median Of Two Sorted Arrays 
-------------------------------------------------------------------------- */



/*-------------------------------------------------------------------------
8. Single Number 
-------------------------------------------------------------------------- */

class SingleNumber {
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int n : nums) {
            result ^= n;
        }
        return result;
    }
}


/*-------------------------------------------------------------------------
9. Majority Element II  
-------------------------------------------------------------------------- */

class MajorityElement {
    public List<Integer> majorityElement(int[] nums) {
        HashMap<Integer, Integer> maps = new HashMap<>();
        List<Integer> elements = new ArrayList<>();

        for (int n : nums) {
            maps.put(n, maps.getOrDefault(n, 0) + 1);
        }

        int max = nums.length / 3;

        for (Map.Entry<Integer, Integer> entry : maps.entrySet()) {
            if (entry.getValue() > max) {
                elements.add(entry.getKey());
            }
        }

        return elements;
        
    }
}


/*-------------------------------------------------------------------------
10. Two Sum 
-------------------------------------------------------------------------- */

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> maps = new HashMap<>();
        int[] result = new int[2];
       if (nums.length <= 1) {
           return new int[]{0};
       }

       for (int i = 0; i < nums.length; i++) {
           int complement = target - nums[i];

           if (maps.containsKey(complement)) {
               result[0] = maps.get(complement);
               result[1] = i;
           } 
            maps.put(nums[i], i);
        }
        
       return result;
        
    }
}



/*-------------------------------------------------------------------------
11. Container With Most Water 
-------------------------------------------------------------------------- */

