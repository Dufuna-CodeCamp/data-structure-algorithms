/*Evaluate Reverse Polish Rotation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(a - b);
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(Math.trunc(a / b));
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack.pop();
};

/*Validate Stack Sequences

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var stack = [];
    var popIndex = 0;

    for (var i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        
        while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
            stack.pop();
            popIndex++;
        }
    }

    return stack.length === 0;
};

/*Next Greater Element II

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var n = nums.length;
    var result = new Array(n).fill(-1);
    var stack = [];

    for (var i = 0; i < 2 * n; i++) {
        while (stack.length > 0 && nums[i % n] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i % n];
        }
        if (i < n) {
            stack.push(i);
        }
    }

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var n = nums.length;
    var result = new Array(n).fill(-1);
    var stack = [];

    for (var i = 0; i < 2 * n; i++) {
        while (stack.length > 0 && nums[i % n] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i % n];
        }
        if (i < n) {
            stack.push(i);
        }
    }

    return result;
};
