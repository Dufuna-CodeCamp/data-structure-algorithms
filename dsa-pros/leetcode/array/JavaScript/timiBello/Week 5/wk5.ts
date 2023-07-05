//Remove element
function removeElement(nums: number[], val: number): number {
let k = 0; // Variable to track the number of elements not equal to val

  // Iterate over the array using two pointers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the element to the front of the array
      k++;
    }
  }

  return k;
};


//Move zeroes
/** JS(using the two pointer technique)
 Do not return anything, modify nums in-place 
 */
function moveZeroes(nums: number[]): void {
  let nonZeroIdx = 0; // Pointer to keep track of the position for non-zero elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the nonZeroIdx position
      nums[nonZeroIdx] = nums[i];
      nonZeroIdx++;
    }
  }

  // Fill the remaining elements from nonZeroIdx to the end of the array with zeros
  for (let i = nonZeroIdx; i < nums.length; i++) {
    nums[i] = 0;
  }
};

//Median of two sorted arrays(To find the median of two sorted arrays in Python with a runtime complexity of O(log(m+n)), you can use the concept of the "Median of Two Sorted Arrays" algorithm.)
//JS(same concept of the "Median of Two Sorted Arrays" algorithm, similar to the approach in Python). 
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
if (nums1.length > nums2.length) {
    // Swap arrays to ensure nums1 is always smaller or equal in length to nums2
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionNums1 = Math.floor((low + high) / 2);
    const partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;

    const maxLeftNums1 = partitionNums1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionNums1 - 1];
    const minRightNums1 = partitionNums1 === m ? Number.POSITIVE_INFINITY : nums1[partitionNums1];
    const maxLeftNums2 = partitionNums2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionNums2 - 1];
    const minRightNums2 = partitionNums2 === n ? Number.POSITIVE_INFINITY : nums2[partitionNums2];

    if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2;
      } else {
        return Math.max(maxLeftNums1, maxLeftNums2);
      }
    } else if (maxLeftNums1 > minRightNums2) {
      high = partitionNums1 - 1;
    } else {
      low = partitionNums1 + 1;
    }
  }

  throw new Error("Input arrays are not sorted!");
};