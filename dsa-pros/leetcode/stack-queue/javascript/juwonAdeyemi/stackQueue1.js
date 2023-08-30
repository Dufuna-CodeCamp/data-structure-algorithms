/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const nextGreater = new Map();
  const stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  const result = [];
  for (let num of nums1) {
    result.push(nextGreater.get(num) || -1);
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const nextGreater = new Map();
  const stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  const result = [];
  for (let num of nums1) {
    result.push(nextGreater.get(num) || -1);
  }

  return result;
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      result[j] = prices[j] - prices[i];
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    result[j] = prices[j];
  }

  return result;
};
