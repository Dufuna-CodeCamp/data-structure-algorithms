var merge = function(nums1, nums2, m, n) {
    // m is equal to nums1 array length
    m = nums1.length;

    // n is equal to nums2 array length
    n = nums2.length;

    // Using the spread operator to expand on each array
    let total =  [...nums1, ...nums2];

    // the sort method arranges the elements of the resulting array in ascending order
    nums1 = total.sort();

    console.log(nums1); // the array length of nums1 here is (n + m) and not m

    console.log(m + n)

};

let arr1 = [2,3,4,2,6], arr2 = [8,6,9,1,4];

// args for m and n are left blank and this does not affect the function in anyway, zeros can also be inputed and the function still works perfectly
merge(arr1, arr2);

merge(arr1, arr2, 0, 0);

// I was able to attempt this question in 1hr