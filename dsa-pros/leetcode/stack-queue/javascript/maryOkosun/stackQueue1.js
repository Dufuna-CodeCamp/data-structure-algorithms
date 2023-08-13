/* <------------------1-------------------> */
// https://leetcode.com/problems/valid-parentheses/

const isValid = (string) => {
  const stack = [];
  const openingBrackets = "{[(";
  const closingBrackets = "}])";
  const pairs = { "}": "{", "]": "[", ")": "(" };

  for (const character of string) {
    if (openingBrackets.includes(character)) {
      stack.push(character);
    } else {
      const lastCharacter = stack.pop();
      if (
        closingBrackets.includes(character) &&
        pairs[character] !== lastCharacter
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const string = "()";
// const string = "(]";
// const string = "()[]{}";
// console.log(isValid(string));

/* <------------------2-------------------> */
const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const nextGreaterElements = {};

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      const poppedItem = stack.pop()
      nextGreaterElements[poppedItem] = num;
    }
    stack.push(num);
  }

  const response = nums1.map((num) => nextGreaterElements[num] || -1);
  return response;
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

/* <------------------3-------------------> */

const finalPrices = (prices) => {
  const stack = []; // This keeps track of all indice

  prices.forEach((price, index) => {
    //loop through the prices array
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= price) {
      //run this loop while stack has values and previous price from the stack index is >= than current price
      const discountedIndex = stack.pop(); //gets the latest index in the stack
      prices[discountedIndex] = prices[discountedIndex] - price; //replace the price in the lastest index with a difference between that price and the current price
    }
    stack.push(index); //this happens for the first iteration and when the previous price is less than the current price
  });

  return prices; //return the new mutated prices array
};

// const prices = [10, 1, 1, 6];
// const prices = [1,2,3,4,5]
const prices = [4, 7, 1, 9, 4, 8, 8, 9, 4];
// console.log(finalPrices(prices));
