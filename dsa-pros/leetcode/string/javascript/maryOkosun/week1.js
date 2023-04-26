/* <------------------1-------------------> */
// Runtime: 77 ms
// Memory Usage: 46.1 MB
var isPalindrome = function (s) {
    let regexExpression = /[^a-z0-9]/g; //regex epression to check against
    let originalString = s.toLowerCase().replace(regexExpression, "");
    let reversedString = originalString.split("").reverse().join("");
    return reversedString === originalString;
  };
  /* <------------------2-------------------> */
  // Runtime: 98 ms
  // Memory Usage: 48.8 MB
  var isAnagram = function (s, t) {
    if (s.length !== t.length) {
      return false;
    }
    return s.split("").sort().join("") === t.split("").sort().join("");
  };
  /* <------------------3-------------------> */
  // Runtime: 76 ms
  // Memory Usage: 45.5 MB
  var lengthOfLongestSubstring = function (s) {
    let newArr = [];
    let currentSubStringLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      const currPosition = newArr.indexOf(s[i]); //checks the position of the current character in the newArr array
      if (currPosition >= 0) {  //checks if the position is greater than or equal to zero, which means it is present in the newArr array
        newArr.splice(0, currPosition + 1);  //this removes elements from index 0 to currentPosition+1, i.e deletes from the beginning to the s[i] itself
      }
      newArr.push(s[i]); //if s[i] is not in the newArr, push the value into newArr
      currentSubStringLength = Math.max(newArr.length, currentSubStringLength); //checks the maximum value between the newArr length and the currentSubStringLength and reassign to currentSubStringLength
    }
  
    return currentSubStringLength;
  };
  
  /* <------------------4-------------------> */ 
  //This is still in progress
  let findPermutations = (string) => {
    if (string.length < 2) {
      return string;
    }
    let permutationsArray = [];
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      let remainingChars = [];
      string.slice(i + 1, string.length).forEach((s) => {
        remainingChars.push(s);
      });
      string.slice(0, i).forEach((s) => {
        remainingChars.push(s);
      });
      for (let perm of findPermutations(remainingChars)) {
        let permArr = [];
        permArr.push(char, perm);
        permutationsArray.push(permArr.flat());
      }
    }
  
    return permutationsArray;
  };
  
  var findSubstring = function (s, words) {
    let permResult = findPermutations(words); //finds permutations of the words returns as [['ssdd', 'gfhgg], ['hfgf', 'gfgffg]]
    let permArray = [];
    let res = [];
    permResult.forEach((res) => {
      permArray.push(res.join("")); // for each permutation returned, we want to join the strings in each array and push each joinedString to permArray
    });
    permArray.forEach((val) => { 
      if (s.indexOf(val) >= 0) { 
        res.push(s.indexOf(val));
      }
    });
    return [...new Set(res)];
  };
  