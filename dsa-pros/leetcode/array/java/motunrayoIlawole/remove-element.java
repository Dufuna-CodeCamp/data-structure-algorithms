class Solution {
    public int removeElement(int[] nums, int val) {

        int passedNum = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                int temp = nums[passedNum];
                nums[passedNum] = nums[i];
                nums[i] = temp;
                passedNum++;
            }
        }

        return passedNum;
    }
}


/*
 * 
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * i = 0, nums[i] = 0, passedNum = 0
 * is 0 == 2? No
 * int temp = 0
 * nums[0] = 0
 * nums[0] = 0
 * passedNum++
 * 
 * i = 1, nums[i] = 1, passedNum = 1
 * is 1 == 2? No
 * int temp = 1
 * nums[1] = 1
 * nums[1] = 1;
 * passedNum++
 * 
 * i = 2, nums[i] = 2, passedNum = 2
 * is 2 == 2? Yes
 * 
 * i = 3, nums[i] = 2, passedNum = 2
 * is 2 == 2? No
 * 
 * i = 4, nums[i] = 3, passedNum = 2
 * is 3 == 2? No
 * int temp = 2
 * nums[2] = 3
 * nums[4] = 2;
 * passedNum++
 */

// loop through the numbers in the array
// if current element is not equal to the given value,
// swap the element with the first element