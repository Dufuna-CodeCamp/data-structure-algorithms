/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0; // pointer for non-zero elements

  // Move non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  for (let j = index; j < nums.length; j++) {
    nums[j] = 0;
  }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const array = [...nums1, ...nums2];
  // Sort the array in ascending order
  const sortedArray = array.sort((a, b) => a - b);

  const length = sortedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Array has an even number of elements
    const median =
      (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    return median;
  } else {
    // Array has an odd number of elements
    const median = sortedArray[middleIndex];
    return median;
  }
};
