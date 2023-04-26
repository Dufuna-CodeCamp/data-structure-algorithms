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
	* * @param {string} t
  * @return {boolean}
  */
 var isAnagram = function(s, t) {
     let word1 = s.split("").sort().join("");
     let word2 = t.split("").sort().join("");
     return word1 === word2 ? true: false;
 };


 // QUESTION 3

 'https://leetcode.com/problems/longest-substring-without-repeating-characters/';

 /**
  * @param {string} s
  * @return {number} **/
 var lengthOfLongestSubstring = function(s) {
     const set = new Set();
     let left = 0, right = 0;
     let longest = 0;
 while (right < s.length) {
         let charc = s[right];
         while (set.has(charc)) {
             set.delete(s[left]);
             left++;
         }
         set.add(charc);
         longest = Math.max(longest, right - left + 1);
         right++;
     }

     return longest };
