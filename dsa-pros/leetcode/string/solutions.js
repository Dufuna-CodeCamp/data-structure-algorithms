// QUESTION 1

"https://leetcode.com/problems/valid-palindrome/"

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    if(str === str.split("").reverse().join("")){
        return true
    } else {
        return false
    }
};


// QUESTION 2

'https://leetcode.com/problems/valid-anagram/'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let word1 = s.split("").sort().join("");
    let word2 = t.split("").sort().join("");
    return word1 === word2 ? true: false;
};

