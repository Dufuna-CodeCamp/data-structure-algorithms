/* <------------------1-------------------> */
// Time complexity: O(n)
// Space complexity: O(n)
var validPalindrome = function (s) {
  let reversedString = s.split("").reverse().join("");
  if (s === reversedString) {
    return true;
  }
  for (let index = 0; index < s.length; index++) {
    let remainingChars =
      s.substring(0, index) + s.substring(index + 1, s.length);
    let remainingReversedChars =
      reversedString.substring(0, s.length - index - 1) +
      reversedString.substring(s.length - index, s.length);
    if (remainingChars === remainingReversedChars) {
      return true;
    }
  }
  return false;
};
// console.log(validPalindrome("abca"));

/* <------------------2-------------------> */
var partitionString = function (s) {
  if (s.length == 1) return 1;
  if (s.length == 0) return 0;
  let count = 1;
  let arr = [];
  for (let char of s) {
    if (!arr.includes(char)) {
      arr.push(char);
    } else {
      arr.splice(0, s.length);
      arr.push(char);
      count++;
    }
  }
  return count;
};
// console.log(partitionString("abacaba"));

/* <------------------3-------------------> */
const decodeString = (s) => {
  const numStack = []; //initialize an empty numStack array to store all numbers
  const charStack = []; //initialize an empty charStack array to store all characters that are not numbers
  for (let i = 0; i < s.length; i++) {
    // a for loop through each character of the string
    if (!isNaN(s[i])) {
      //This checks if the character is a type of NAN. Note that isNaN first converts the character to a number and then checks if it isNaN or not, unlike the Number.isNaN()
      numStack.push(parseInt(s[i])); //If value is not NAN, i.e it is a valid number, remember that s[i] is a string, we convert to integer using parseInt and then push to the numStack
    } else {
      if (s[i] === "]") {
        let lastIndexOfOpeningBracket = charStack.lastIndexOf("["); //This gets the last index of the opening bracket
        let recentNumberInStack = numStack.pop(); //This gets the most recent number in the numStack
        let splicedArray = charStack.splice(lastIndexOfOpeningBracket); //Here, we want to return a new array of the first duplication
        let slicedArray = splicedArray.slice(1); // e.g splicedArray = [ '[', 'c' ] Here we want to get just the alpabets without the opening bracket inclusive which is at index 0, so we slice from index 1
        let repeatedString = slicedArray.join("").repeat(recentNumberInStack); // Here we want to join the strings in the array and use the .repeat method to get a repeated string
        charStack.push(repeatedString); //Here, we want to push the repeated string to the charStack for the next iteration to take place
      } else {
        charStack.push(s[i]); //Here, if s[i] is not equal to "]", we want to push the character to the charStack
      }
    }
  }
  return charStack.join(""); //Remember our charStack is an array of repeated strings, we want to join the strings here and return the value
};

// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("2[abc]3[cd]ef"));
