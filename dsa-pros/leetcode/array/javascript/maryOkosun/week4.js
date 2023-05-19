var containsDuplicate = function(nums) {
    let values = new Set()
    for(let num of nums){
        if(values.has(num)){
            return true
        }
        values.add(num)
    }
    return false;
};


var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1
    let mid = 0;

    while (start <= end){
        mid = start + Math.floor((end - start) / 2);
        if(target === nums[mid]){
            return mid
        }
        target > nums[mid] ? start = mid + 1 : end = mid - 1
        
    }
    return -1
};

var lengthOfLIS = function(nums) {
    const newArray = Array(nums.length).fill(1); //this creates a new array with 1s of same length as nums
  
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j] && newArray[i] <= newArray[j]) {
            newArray[i] = newArray[j] + 1;
        }
      }
    }
    return Math.max(...newArray);
  }