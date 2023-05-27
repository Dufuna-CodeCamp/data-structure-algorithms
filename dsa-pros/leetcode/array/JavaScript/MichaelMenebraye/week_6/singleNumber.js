// leetcode 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function (nums) {
    nums.sort(); //sort arr to ascendng order
    let leftPointer = 0; //get first arr index 
    let rightPointer = 1; //get second arr index 

    while (rightPointer < nums.length) { //loop though
        //every element appears twice except for one compare; thus, compare sorted array with its sorted neigbour 
        if (nums[leftPointer] !== nums[rightPointer]) {
            return nums[leftPointer];
        }
        leftPointer += 2; //skip to 2 after comparism 
        rightPointer += 2; //skip to 2 after comparism
    }
    return nums[leftPointer];
};