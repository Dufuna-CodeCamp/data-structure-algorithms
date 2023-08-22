/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

const validStackSequence = (pushed, popped) => {
  if(pushed.length !== popped.length) return false;

  for(let i = 1; i <= pushed.length ; i++) {
    if((pushed[i - 1] > popped[popped.length - i])) return false;
  }

  return true;

};

console.log(validStackSequence([1,2,3,4,5], [4,5,3,2,1]))