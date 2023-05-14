//Arrays
//manifesting answswering all questions this time
//practice question: Remove duplicates
var removeDuplicates = function(nums) {
    let count = 0;
    //variable to store the number of unique elements ie k
    for(i=0;i<nums.length;i++){
        if(nums[i] != nums[i+1]){
           nums[count] = nums[i];
        count++
           }
    }
    return count;
};
//runtime 68ms space 44.9mb
//1. Contains duplicate
//we go through array ~ twice runtime 7366ms space 48.9mbs
//time complexity  ..... space? 
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i;j++) { 
            //nums.length doesnt compute at this step; instead let j follow in the steps of i
            if (nums[i] == nums[j]) {
                //check value of element at those two indices
                return true;
            }
        }
    }
    return false;
};

//2.Binary Search
// time is big O n- Iterate through once. so depends onm length of array
//space? 
//run time  52ms ; spce 45.3mb
//can i use contains/ is in??
//other option indexOf
var search = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(nums[i] == target){
            //if value at index i is target
            return i;
        }
    }
    return -1;
};
//3.Rotate array
//hardest one to figure out
/*
// modulus of length of array because after x rotations we get the intial array back
    //length of array
    //iterate k times; start from zero run i = k-1 times; start from 1 run k times ie i =k
   for(i=0;i<k;i++){
       // pop the last ie right most then place it at the start of the array
       nums.unshift(nums.pop());
    }
    return nums;
    //correct but exceeds leetcodes time limit
    time complexity is O(n*k)
*/
var rotate = function(nums, k) {
    function reverse (arr, start, end){
        while(start<end){
            [arr[start],arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }
    //to ensure the array we are dealing with is not exct to the original
    k%= nums.length;
    reverse(nums, 0,(nums.length-1));// start from index 0 then end at index length-1
    reverse(nums,0, (k-1));
    reverse(nums, k, (nums.length-1));
    return nums;
    
};
//time complexity O(n*3); space O(1)

//4.longestincreasing subsequence
//for reasons i cannot explain yet Typescript method accepted
//i dont know typescript
//var counter =0;
var lengthOfLIS = function(nums) {
    //read more to explain this step better
    let dp = new Array(nums.length).fill(1);
    for(i=0;i<nums.length;i++){ 
        //at index 1
        for(j=0;j<i;j++){
            //at the previous index
            if(nums[j]<nums[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
            //counter++;
            }
        }    
    }
     return Math.max(...dp);
};