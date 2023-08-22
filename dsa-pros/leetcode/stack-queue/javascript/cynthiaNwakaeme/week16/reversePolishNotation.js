/**
 * @param {string[]} tokens
 * @return {number}
 */
const reversePolishNotation = (tokens) => {
  let stack = [];

  for(let i = 0; i < tokens.length; i++) {
    const currentValue = tokens[i];

    if(currentValue === "+") stack.push(stack.pop() + stack.pop());
    else if(currentValue === "-") stack.push(-stack.pop() + stack.pop());
    else if(currentValue === "*") stack.push(stack.pop() * stack.pop());
    else if(currentValue === "/") stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
    else stack.push(parseInt(currentValue));
  }
  return stack[0];
};

console.log(reversePolishNotation(["4", "13", "5", "/", "+"]))