// palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const REGEX_1 = /[\W_]/g;
    const REGEX_2 = /[^0-9a-z]/g;
    const lowerCase = s.toLowerCase().replace((REGEX_1,REGEX_2), '');
    const splitString = lowerCase.split('').reverse().join('');
    return lowerCase == splitString;
};

//runtime 63ms 
//memory 45.8mbs

// valid anagram
//this one was hard 
var isAnagram = function(s, t) {
    //go through string
    // length?
    //cehck if t is in string ir reversed or not
    // is anagram if true
     // Get lengths of both strings
        if (s.length != t.length) return false;
	const store = {};

	for (let i = 0; i < s.length; i++) {
		if (!store[s[i]]) {
			store[s[i]] = 0;
		}
		store[s[i]]++;
	}

	for (let j = 0; j < t.length; j++) {
		if (!store[t[j]]) {
			return false;
		}
		store[s[j]]--;
	}

	return true;
};
// failed on some test cases

// longest substring without repeating characters
// its 6am 
var lengthOfLongestSubstring = function(s) {
    // go through length of string
    //pick out unique chqaracters
    // add the values to get length of string
    let maxLength = 0;
    //indexing through s at index 0
    for (let i = 0; i < s.length; i++) {
        //at index 1 adding up each character
        let out = 1;
        //pushing first character which is at index i ie 0
        let substring = [s[i]];

        for (let j = i + 1; j < s.length; j++) {
            //if item at index j already exists in s
            if (substring.includes(s[j])) {
                break;
            // if item is unique or not in substring
            }else{
                out++;
                substring.push(s[j]);
            }

            
        }
        //creating variabla maxlength which maps maxlength to out which equates to characyers added to substring
        maxLength = Math.max(maxLength, out);
    }
    return maxLength;
};

// substring concantenation
// very hard lol