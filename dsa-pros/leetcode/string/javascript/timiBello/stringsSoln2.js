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

// QUESTION 3

'https://leetcode.com/problems/optimal-partition-of-string/'

/**
  * @param {string} s
  * @return {number} **/


// QUESTION 4

'https://leetcode.com/problems/decode-string/'

/**
  * @param {string} s
  * @return {number} **/