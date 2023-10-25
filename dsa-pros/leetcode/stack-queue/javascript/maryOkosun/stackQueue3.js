//space and time complexity is O(n) where n is the number of tokens in the array
var evalRPN = function (tokens) {
  let stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      //this check if the value is a number as true === not a number
      stack.push(parseInt(token));
    } else {
      const secondInteger = stack.pop(); // the last element in the stack is removed first
      const firstInteger = stack.pop(); // the first element in the stack is removed last
      let result;
      switch (token) {
        case "+":
          result = firstInteger + secondInteger;
          stack.push(result);
          break;
        case "-":
          result = firstInteger - secondInteger;
          stack.push(result);
          break;
        case "*":
          result = firstInteger * secondInteger;
          stack.push(result);
          break;
        default:
          result = parseInt(firstInteger / secondInteger);
          stack.push(result);
          break;
      }
    }
  }
  return stack[0];
};

let tokens = ["2", "1", "+", "3", "*"];
// console.log(evalRPN(tokens));

var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let index = 0;

  for (const value of pushed) {
    stack.push(value);
    while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  return index === popped.length;
};
let pushed = [1, 2, 3, 4, 5];
let popped = [4, 3, 5, 1, 2];
// console.log(validateStackSequences(pushed, popped));

var nextGreaterElements = function(nums) {
    
};