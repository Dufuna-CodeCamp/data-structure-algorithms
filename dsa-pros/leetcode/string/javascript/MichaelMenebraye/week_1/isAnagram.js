//leetcode 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function (s, t) {

    let sToArr = s.split(''); //convert to array
    let tToArr = t.split(''); //convert to array

    let sortS = sToArr.sort();  //arrange alphabetically
    let sortT = tToArr.sort();  //arrange alphabetically

    let sToStr = sortS.join(''); //convert to string
    let tToStr = sortT.join(''); //convert to string

    // compare string
    if (sToStr == tToStr && s.length == t.length) {
        return true;
    } else {
        return false;
    }
};
let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t))