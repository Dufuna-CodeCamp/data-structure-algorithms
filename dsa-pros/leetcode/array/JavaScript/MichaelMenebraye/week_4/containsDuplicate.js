// leetcode 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function (nums) {
    nums.sort(); //sort arr to compare 
    let leftPointer = 0; // get firsrt element from arr
    let rightPointer = 1; // get second element from arr
    while (rightPointer < nums.length) { //loop through
        if (nums[leftPointer] == nums[rightPointer]) { // compare sorted arr with neigbour
            return true;
        }
        leftPointer++; //move to next element or arr index
        rightPointer++; //move to next element or arr index
    }
    return false; //if none of the above block comes out true, return false
};