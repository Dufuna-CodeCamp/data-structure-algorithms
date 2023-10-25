/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElementII = (nums) => {
  let i = 0
  let output = []

  const incrementIndex = (index) => index === nums.length - 1 ? 0 : index + 1

  let startIndex = incrementIndex(i)

  while(output.length < nums.length) {
    if(nums[startIndex] > nums[i]) {
      output.push(nums[startIndex])
      i = incrementIndex(i)
      startIndex = incrementIndex(i)
    } else {
      if(startIndex !== i) {
        startIndex = incrementIndex(startIndex)
      } else {
        output.push(-1)
        i = incrementIndex(i)
        startIndex = incrementIndex(i)
      }
    }
  }

  return output;
}

console.log(nextGreaterElementII([1,2,1]));