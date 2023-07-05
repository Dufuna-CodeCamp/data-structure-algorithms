//Single Number
function singleNumber(nums: number[]): number {
let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};


//Majority Element II/ using hash map
function majorityElement(nums: number[]): number[] {
    const result = [];
  const frequencyMap = {};

  // Step 1: Count frequencies
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap[nums[i]] === undefined) {
      frequencyMap[nums[i]] = 1;
    } else {
      frequencyMap[nums[i]]++;
    }
  }

  // Step 2: Check frequencies
  const threshold = Math.floor(nums.length / 3);
  for (const num in frequencyMap) {
    if (frequencyMap[num] > threshold) {
      result.push(parseInt(num));
    }
  }

  return result;
};


/*
JS(using a map(numsindices)
**/
var twoSum = function(nums, target) {
    const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  // No solution found
  return [];

};

//Container With Most Water(two pointer approach) 
//JS(two pointer approach)
var maxArea = function(height) {
    let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};