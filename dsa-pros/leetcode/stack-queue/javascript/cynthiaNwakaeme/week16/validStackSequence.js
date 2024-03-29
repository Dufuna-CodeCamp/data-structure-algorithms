/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

const validStackSequence = (pushed, popped) => {
  /*if(pushed.length !== popped.length) return false;

  for(let i = 1; i <= pushed.length ; i++) {
    if((pushed[i - 1] > popped[popped.length - i])) return false;
  }

  return true;
*/
  const stack = []
  let i = 0

  for (const element of pushed) {
    stack.push(element);

    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  }

  return pushed.length === i;
};

