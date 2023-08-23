/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const nextGreaterElements = {};

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      const poppedItem = stack.pop();
      nextGreaterElements[poppedItem] = num;
    }
    stack.push(num);
  }

  return nums1.map(num => nextGreaterElements[num] || -1);
}

// console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]))