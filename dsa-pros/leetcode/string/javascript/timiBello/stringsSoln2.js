// QUESTION 1

'https://leetcode.com/problems/substring-with-concatenation-of-all-words/'

/**
  * @param {string} s
  * @return {number} **/

var findSubstring = function (s, words) {
    // Resultant list. MEHN THIS WAS HARD UGGHH!!!!!
    const indices = [];
    // Base conditions
    if (s === null || s.length === 0 || words === null || words.length == 0) {
        return indices;
    }
    // Store the words and their counts in a hash map
    const wordCount = words.reduce((a, b) => {
        a[b] = (a[b] + 1) || 1;
        return a;
    }, {});
    // Length of each word in the words array`
    const wordLength = words[0].length;
    // Length of all the words combined in the array
    const wordArrayLength = wordLength * words.length;
    // Loop for the entire string
    for (let i = 0; i <= s.length - wordArrayLength; i++) {
        // Get the substring of length equal to wordArrayLength
        let current = s.substring(i, i + wordArrayLength);
        // Map to store each word of the substring
        const wordMap = {};
        // Index to loop through the words array
        let index = 0;
        // Index to get each word in the current
        let j = 0;
        // Loop through each word of the words array
        while (index < words.length) {
            // Divide the current string into strings of length of
            // each word in the array
            const part = current.substring(j, j + wordLength);
            // Put this string into the wordMap
            wordMap[part] = (wordMap[part] + 1) || 1;
            // Update j and index
            j += wordLength;
            index++;
        }
        // At this point compare the maps
        let a = JSON.stringify(Object.entries(wordCount).sort());
        let b = JSON.stringify(Object.entries(wordMap).sort());
        if (a === b) {
            indices.push(i);
        }
    }
    return indices;  
};

// QUESTION 2

'https://leetcode.com/problems/valid-palindrome-ii/'

/**
  * @param {string} s
  * @return {number} **/

// remove the i'th character from the string
const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const solution = (s, n = s.length) => {
  // revesed string
  const reversed = s.split("").reverse().join("");
  
  //base case
  if(reversed === s){
     return true;
  }
  
  //iterate array and check if palindrome can be found
  for(let i = 0; i < n; i++){
    //index from start
    const start = i;
    
    //index from rear
    const end = n - i - 1;
    
    //get the updated string by removing the characters
    const nTransformed = cut(s, start);
    const rTransformed = cut(reversed, end);
    
    //if both string match, then it is palindrome
    if(nTransformed === rTransformed){
      return true;
    }  
  }
 
  //if no palindrome found
  return false;
}
// QUESTION 3

'https://leetcode.com/problems/optimal-partition-of-string/'

/**
  * @param {string} s
  * @return {number} **/

var partitionString = function(s) {//3
    //abacaba  //a
    if(s.length==1)
        return 1;
    if(s.length==0)
        return 0;
    let res=1;
    let map=new Map();
    for(let char of s){
      if(!map.get(char))
          map.set(char,1)
        else{
            map.clear();
            map.set(char,1)
              res++;
        }
          
    }
    return res;
};

// QUESTION 4

'https://leetcode.com/problems/decode-string/'

/**
  * @param {string} s
  * @return {number} **/
 
var decodeString = function (s) {
  const N = s.length

  const stack = []

  for (let i = 0; i < N; i += 1) {
    const ch = s[i]

    if (ch === ']') {
      let sub = ''
      while (stack.at(-1) !== '[') {
        sub = stack.pop() + sub
      }
      stack.pop()
      let num = ''
      while (!isNaN(stack.at(-1))) {
        num = stack.pop() + num
      }
      stack.push(sub.repeat(num))
    } else {
      stack.push(ch)
    }
  }

  return stack.join('')
}