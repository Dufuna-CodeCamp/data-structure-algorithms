// leetcode 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.


var isPalindrome = function (s) {
    //convert to lowercase
    let toLower = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    //convert to word array
    let toArr = toLower.split(' ');

    let newReversedStr = [];

    // loop converted string
    toArr.forEach(element => {
        //convert to single letter array and reverse
        let revesStr = element.split('').reverse();
        newReversedStr.push(revesStr);
    });

    let str = newReversedStr.join().replace(/[^a-zA-Z0-9]/g, '');

    if (toLower != str) {
        return false;
    } else {
        return true;
    }
};