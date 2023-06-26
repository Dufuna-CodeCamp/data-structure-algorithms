/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 90 ms
Beats 24.74%
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};
