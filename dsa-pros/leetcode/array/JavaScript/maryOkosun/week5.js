var removeElement = function (nums, val) {
  if (nums.length === 0) return nums;

  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("false", i, nums[i]);
    if (nums[i] !== val) {
      //checks if element at index i is not equal to val
      nums[currentIndex] = nums[i]; // Move the element to the nums[currentIndex]
      currentIndex++; //increase the currentIndex by 1
    }
  }
  return currentIndex;
};

var moveZeroes = function (nums) {
  if (nums.length < 0) return nums;
  if (nums.length === 1) return nums[0];

  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //checks if element at index i is not equal to 0
      nums[currentIndex] = nums[i]; //move the element at index i to nums[currentIndex]
      currentIndex++; //increment current Index by 1
    }
  }

  for (let i = currentIndex; i < nums.length; i++) {
    //loop through the nums and start at index of cuurentIndex
    nums[i] = 0; //replace the element at index i with 0
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = [...nums1, ...nums2]; //merge both arrays here
  mergedArray.sort((a, b) => a - b); //sort mergedArray
  if (mergedArray.length < 1) return mergedArray;
  if (mergedArray.length === 1) return mergedArray[0];

  const mid = Math.floor(mergedArray.length / 2); //get the rounded down middle index

  if (mergedArray.length % 2 === 1) {
    //check if mergedArray is an odd array
    return mergedArray[mid];
  } else {
    //if it is an even array
    return (mergedArray[mid] + mergedArray[mid - 1]) / 2; //get average of previous and current value divided by 2
  }
};
