var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) { //loop through the two arrays
    nums1[i + m] = nums2[i]; // replace the last "n" elements of nums1 array with the elements of nums2 array
  }
  return nums1.sort(function (a, b) { // sort nums1 array
    return a - b;
  });
};

/*
Time Complexity is O(KlogK) where K = m + n since all m + n elements are stored in nums1 array
Space Complexity is O(1) as constant memory is used for the variables i.e. a new array was not created to store the variables.
*/
