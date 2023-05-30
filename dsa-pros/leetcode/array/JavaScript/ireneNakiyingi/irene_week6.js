//week6 Arrays
//1 single number
 //constant extra space? space complexity O(1)
 //ie only the item needed is returned
 //but linear time complexity; O(n); depending on length of input

 var singleNumber = function(nums) {
    
    for(let i=0; i<nums.length;i++){
        var count = 0; //moved var to within the first iteration
        for(let j=0;j<nums.length;j++){
            if(nums[i]== nums[j]){
                count ++; 
            }
        }
        if(count == 1){
            return nums[i]
        }
        
        
    }
};
//solution has time complexity O(n^2)?
//read up XOR
//2majority element

//3 two sums
var twoSum = function(nums, target) {
    for(x=0;x<nums.length;x++){
        //run through for the first number
        for(y=x+1;y< nums.length;y++){
            //run through for the second nunmber starting at an index ahead of the current one for thr first number
           if(nums[x]+ nums[y]==target){ //check if sum of values at those indicies add up to target
            return [x,y]; // print out the indices
        }
        }
        
    }
    
};
//4container with most water
