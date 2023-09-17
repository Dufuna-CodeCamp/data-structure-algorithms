//1. https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //if int is not specified i get an outpt but wrong
    let stack =[];
    // Iterating to the each character
    // in the array of the string
    for (let i = 0; i < tokens.length; i++)
    {
     
        // If the character is not the special character
        // ('+', '-' ,'*' , '/')
        // then push the character to the stack
        if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "/"
            && tokens[i] != "*") {
            stack.push(parseInt(tokens[i])); //only here gives error for some tests
            continue;
        }
         
         // else if the character is the special
         // character then use them to
         // perform the action
        else {
            let b = parseInt(stack.pop()); //element 1
            let a = parseInt(stack.pop());//element 2
            // one test wrong
            if (tokens[i] == "+")
                stack.push(a + b);
            else if (tokens[i] == "-")
                stack.push(a - b);
            else if (tokens[i] == "*")
                stack.push(a * b);
            else
                stack.push(parseInt(a / b)); //missing point why?
        }
    }
    return (stack[stack.length-1]);
};

//2. https://leetcode.com/problems/validate-stack-sequences/


//3. https://leetcode.com/problems/next-greater-element-ii/
//faield to solve the last issue of creating a circular iteration
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    //element after end of array is the one at index 0
    let k = [];
    var n = nums.length;
    for(i=0;i<nums.length;i++){
        let j = i % n;
        if(nums[i+1] > nums[i]){
            k.push(nums[i+1]);
        }
        else if (nums[i]> nums[i+1]){
            k.push(-1)
        }
         else{
            k.push(nums[i% nums.length])
        }
    }
    return k;
    
};