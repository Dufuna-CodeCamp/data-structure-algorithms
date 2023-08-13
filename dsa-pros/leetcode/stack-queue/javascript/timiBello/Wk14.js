/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (bracketsMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || bracketsMap[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

//Next greater element 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreaterMap = new Map();
    const result = [];

    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreaterMap.set(stack.pop(), num);
        }
        stack.push(num);
    }

    for (let num of nums1) {
        result.push(nextGreaterMap.get(num) || -1);
    }

    return result;
};

//FinalPricesWith
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [];
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = prices[index] - prices[i];
        }
        stack.push(i);
        result[i] = prices[i];
    }

    return result;

};