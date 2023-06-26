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
