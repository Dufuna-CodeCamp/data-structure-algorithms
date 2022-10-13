var sumOfUnique = function (nums) {
  let resultArr = [];   // Empty array to store unique numbers
  for (const num of nums) {  // Loop through the array
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {  // Conditional statement
      resultArr.push(num);   // Push unique numbers into the empty array
    }
  }
  if (resultArr.length === 0) {
    return 0;
  } else {
    return resultArr.reduce((a, b) => a + b);   // returns the sum of the numbers in the result array
  }
};

// The time complexity is O(N) and the space complexity is also O(N).
