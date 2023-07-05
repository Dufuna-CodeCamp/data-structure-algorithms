/*Contains Duplicate*/
function containsDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

//Binary Search
function search(nums: number[], target: number): number {
let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

/* Rotate Array
Do not return anything, modify nums in-place instead.*/
function rotate(nums: number[], k: number): void {
      k = k % nums.length; // Effective number of rotations
  let count = 0; // Number of elements rotated

  let start = 0;
  while (count < nums.length) {
    let current = start;
    let prev = nums[start];

    do {
      const nextIdx = (current + k) % nums.length;
      [nums[nextIdx], prev] = [prev, nums[nextIdx]];
      current = nextIdx;
      count++;
    } while (start !== current);

    start++;
  }
};


/*Longest Increasing Subsequence
(did this to give 0(n log(n)) time complexity using Dynamic Programming with Binary Search algorithm*/
function lengthOfLIS(nums: number[]): number {
if (nums.length === 0) {
        return 0;
    }

    const tails = [nums[0]]; // Initialize the tails array with the first element

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num > tails[tails.length - 1]) {
            tails.push(num);
        } else {
            // Use binary search to find the correct position to update the tail
            let left = 0;
            let right = tails.length - 1;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);

                if (tails[mid] < num) {
									 left = mid + 1;
                } else {
                    right = mid;
                }
            }

            tails[left] = num;
        }
    }

    return tails.length;
};
