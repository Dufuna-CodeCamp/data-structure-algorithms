/**
 * @param {string} s
 * @return {boolean}
 */

const ValidParentheses = (s) => {
  const stacks = [];

  for (let char of s){
    if (/[\(\[\{]/.test(char)){
      stacks.push(char);
      continue;
    }


    const top = stacks[stacks.length-1];

    if((top === "(" && char === ")") || (top === "[" && char === "]") || (top === "{" && char === "}")){
      stacks.pop();
      continue;
    }
    return false;
  }
  return stacks.length === 0;
}

console.log(ValidParentheses("()[]{}"))

