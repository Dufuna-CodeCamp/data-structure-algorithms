/*-------------------------------------------------------------------------
1. CONTAINS DUPLICATE
Time complexity - O(n)                  Runtime - 76ms
Space complexity - O(n)                 Memory Usage -  55.6MB
-------------------------------------------------------------------------- */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
};

/*-------------------------------------------------------------------------
2. BINARY SEARCH
Time complexity - O(log n)              Runtime - 73ms
Space complexity - O(1)                 Memory Usage -  45.4MB
-------------------------------------------------------------------------- */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        middle = Math.floor((left + right) / 2);

        if(nums[middle] < target) {
            left = middle + 1;
        }

        else if(nums[middle] > target) {
            right = middle - 1;
        }

        else{
            return middle;
        }
    }

    return -1;
};

/*-------------------------------------------------------------------------
3. ROTATE ARRAY
Time complexity - O(n)                  Runtime - 90ms
Space complexity - O(1)                 Memory Usage -  51.4MB
-------------------------------------------------------------------------- */
var rotate = function(nums, k) {
    if(k === nums.length) {
        return nums;
    }

    else if ( k > nums.length) {
        k = k % nums.length;
    }

    const cut = nums.splice(nums.length - k, k);
    nums.unshift(...cut);
};

/*-------------------------------------------------------------------------
4. 
Time complexity -                   Runtime - 
Space complexity -                  Memory Usage -  
-------------------------------------------------------------------------- */
