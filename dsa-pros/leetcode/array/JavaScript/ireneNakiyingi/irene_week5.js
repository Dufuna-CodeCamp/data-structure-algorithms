// read ALL instructions lol
// week5 

//1. Remove element sort
//runtime  53ms memory 42.1mbs
var removeElement = function(nums, val) {
    //variable to add up our elements that are not equal to val
    var expectedNums = 0;
    for(var i=0; i< nums.length;i++){
        if(nums[i]==val){
            //if you find val, ignore and move to next index
            continue;
        }else{
            //if not val, the index found at index of expected nums(after adding) make it equal to index of i
            nums[expectedNums]= nums[i];
            //increament expectednums
            expectedNums++;
        }
        
    } // continue running the for loop, incrementing i and expected nums with each run depending on outcome
    //return the total of the values that dont match val which is k in this a case
    return expectedNums;
};

//2. Move zeros
//runtime 97ms memory 46.3mbs
//no new array ie cannot do push for non zero elemnts
var total =0; //storing number of non zero items
var moveZeroes = function(nums) {
    var total =0; //storing number of non zero items
    for(i=0;i<nums.length;i++){
        if(nums[i] != 0){
            //if element not equal to zero; make the value at total = value at i
            // ie if total is 3; make the element at 3 move to index 3 in the original array
            nums[total] = nums[i]
            total = total +1
            
        }
    }
    for (i= total;i<nums.length;i++){
        // anything left after the final addition; ie after weve moved all elements not
        //equal to 0; the ones left will be equal to zero in original array
        nums[i]=0;
    }
    //no need to return nums. 
};

//3.median of two sorted arrays
//in progress
//0(log(m+n)) requiremnt makes binary search necessary
var findMedianSortedArrays = function (nums1, nums2) {
    // Check if num1 is smaller than num2
    // If not, then we will swap num1 with num2
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    // Lengths of two arrays
    const m = nums1.length;
    const n = nums2.length;
    // Pointers for binary search
    let start = 0;
    let end = m;
    // Binary search starts from here
    while (start <= end) {
        // Partitions of both the array
        let partitionNums1 = Math.floor((start + end) / 2);
        let partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;
        // Edge cases
        // If there are no elements left on the left side after partition
        let maxLeftNums1 = partitionNums1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
        // If there are no elements left on the right side after partition
        let minRightNums1 = partitionNums1 == m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
        // Similarly for nums2
        let maxLeftNums2 = partitionNums2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 - 1];
        let minRightNums2 = partitionNums2 == n ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
        // Check if we have found the match
        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
            // Check if the combined array is of even/odd length
            if ((m + n) % 2 == 0) {
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2.0;
            } else {
                 return Math.max(maxLeftNums1, maxLeftNums2);
            }
        }
        // If we are too far on the right, we need to go to left side
        else if (maxLeftNums1 > minRightNums2) {
            end = partitionNums1 - 1;
        }
        // If we are too far on the left, we need to go to right side
        else {
            start = partitionNums1 + 1;
        }
    }
};