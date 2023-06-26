var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums.sort()) {
    result = result ^ num; //^ means XOR. XOR of a number with itself is 0. XOR of a number with 0 is number itself.
  }
  return result;
};

var majorityElement = function (nums) {
  let occurence = Math.floor(nums.length / 3); //get occurence for that array
  let elementOccurrence = {}; //initilaize an empty object
 
  for (let i = 0; i < nums.length; i++) {
    if (Object.keys(elementOccurrence).includes(nums[i].toString())) { //check if that num already is in element occurrence
      elementOccurrence[nums[i]] += 1; //if exists, increment the value by 1
    } else {
      elementOccurrence[nums[i]] = 1; //else, assign 1 to the value of the num[i]
    }
  }

  let result = [];
  for (const key in elementOccurrence) { //loop through the elementOccurrence object
    if (elementOccurrence[key] > occurence) { //if the values are greater than the occurence
      result.push(parseInt(key)); //convert to an integer and push them to result array
    }
  }
  return result;
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    //loop through nums
    for (let j = i + 1; j < nums.length; j++) {
      //increment i by 1 and loop through nums
      if (nums[i] + nums[j] === target) {
        //if first loop i + second loop j === target
        return [i, j]; //return index of i and j
      }
    }
  }
};
