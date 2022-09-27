var searchInsert = function (nums, target) {
  if (nums.length < 1 || nums.length > 10000) { // Conditional statement if array length is outside the scope
    return nums.push(); // returns the length of the array
  }
  for (let i = 0; i < nums.length; i++) { // looping through the mums array
    if (nums.includes(target)) { // Conditional statement if target is an element of nums array
      return nums.indexOf(target);
    } else { // Conditional statement if target is not an element of nums array
      nums.push(target); // inserting target at the last position of the nums array
      nums.sort(function (a, b) { // sorting nums array after insertion
        return a - b;
      });
      return nums.indexOf(target); // returning the indexOf target after insertion
    }
  }
};

/*
Time Complexity is O(log N) 
Space Complexity is O(1) as constant memory is used for the variables i.e. a new array was not created to store the variables.
*/
