// leetcode 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.



var findMedianSortedArrays = function (nums1, nums2) {

    let mergeArr = nums1.concat(nums2);

    let sortArr = mergeArr.sort((a, b) => a - b);

    let getModulus = sortArr.length % 2;

    let result = '';

    if (getModulus == 0) {
        
        const midpoint = Math.floor(sortArr.length / 2);

        const firstHalf = sortArr.slice(0, midpoint);
        const secondHalf = sortArr.slice(midpoint);

        let sum = firstHalf[firstHalf.length - 1] + secondHalf[0];

        result = sum /2
        
    } else {
        const midpoint = Math.floor(sortArr.length / 2);

        const firstHalf = sortArr.slice(0, midpoint);
        const secondHalf = sortArr.slice(midpoint);
        result = secondHalf[0];
    }

    return result;

};

let nums1 = [1, 2], nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2))
console.log(findMedianSortedArrays([1,3], [2]))