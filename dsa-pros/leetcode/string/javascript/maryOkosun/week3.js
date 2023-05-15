// Time complexity = 0(N) dependant on the length of the string param N
// Space complexity = 0(1) uses a constant memory space
var balancedStringSplit = function (s) {
  let counter = 0;
  let total = 0; //Initailize counter and total to zero
  for (let index = 0; index < s.length; index++) {
    //create a for loop
    s[index] === "R" ? counter++ : counter--; //checks if the character at s[index] == R, increment counter by 1 else decrease by 1
    if (counter === 0) {
      //if counter is 0, means there is a balanced number of R and L, at this point increment the total by 1
      total++;
    }
  }
  return total; //returns the total at the end of all iteration
};

var multiply = function (num1, num2) {
  if (num1[0] === "0" || num2[0] === "0") {
    return "0";
  }

  let result = [];
  let count = 0;
  let remainder = 0;
  for (let i = num2.length - 1; i >= 0; --i) {
    let arr = [];
    for (let j = num1.length - 1; j >= 0; --j) {
      let val = num2[i] * num1[j];
      if (val > 9) {
        val += remainder;
        if (j === 0) {
          arr.unshift(val);
          remainder = 0;
        } else {
          let modulus = val % 10;
          arr.unshift(modulus);
          remainder = (val - modulus) / 10;
        }
      } else {
        val += remainder;
        remainder = 0;
        arr.unshift(val);
      }
    }
    remainder = 0;
    count++;
    let trailingZeros = "0".repeat(count - 1);
    result.push(parseInt(arr.join("") + trailingZeros));
  }

  return result.reduce((partialSum, a) => partialSum + a, 0).toString();
};