/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 
 */
var search = function (nums, target) {
  nums.sort;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1; // Element not found
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */
var rotate = function (nums, k) {
  k %= nums.length; // actual number of steps to rotate
  nums.unshift(...nums.splice(-k));
};

/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.
 */
var lengthOfLIS = function (nums) {
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      count++;
    }
  }
  return count;
};
