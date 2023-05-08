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
//runtime 879ms
//memory 48.9mbs

// substring concantenation
// very hard lol


// STRINGS 2
//1. VALID PALLINDROME II
/*
 * @param {string} s
 * @return {boolean}
 */
 //where and how to delete any one element?????????????? I think thats where i'm failing
/*var validPalindrome = function(s) {
    // create variables that take index 1 and last index
    var indexZero = 0;
    var lastIndex = s.length-1;
    
    //iterate along the length of string from zero tolast
    while(indexZero<lastIndex){
        // iterate through the given string at both indexes
        //if the same return true
        /*if (s.charAt(indexZero)==s.charAt(lastIndex)){
            // step wise move up one from zero then down one from last
            return true;
        };*/
        //otherwise
        /*if (s.charAt(indexZero) !==s.charAt(lastIndex)){
            return palindrome(s, indexZero +1, lastIndex) ||
              palindrome(s,indexZero, lastIndex -1);
  
    
        }; 
        return true; 
    }   
};

// function that actually checks for plaindrome
//takes 3 parameters and checks if elements at different indexes are the same ie forming a palindrome or not
function palindrome(str,indexZero,lastIndex){
    while(indexZero<lastIndex){
        if(str[indexZero] !== str[lastIndex]){ //ie if not giving a pallindrome
            
            //move to next index in both directions
            indexZero++;
            lastIndex--;
            return false;
        }
        //if they are the same
        return true;
    }

}*/
// passed test cases on run
//failed some cases on submission


//optimal substring partition
//run time 131ms
//memory 50mbs
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    // go through whole of string s
    //check for position of each element
    //push each to the stirng, if already exists push to next string?how?// all substrings stored on one variable
    let n = s.length;
    let substrings = new Set();
    //start adding values from 1; given that weve already added an element to substrings
    var total = 1;
    for(i=0;i<=n;i++){
        
        if(substrings.has(s[i])){
            total+=1;
            substrings.clear(); //to start a new substring
        }//if not in substrings add the element
        substrings.add(s[i]);
       
    }
    //return the number of times a vlaue has been added to a substring
    return total;


};
// i think time complexity is On since we go through the intial string once? Space idk

// 3. decoding string
//apllied stacks
//run time 64ms
//memory 41.4mbs
// space and time? 
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }

        let currChar = stack.pop();
        let decoded = '';
        while (currChar !== '[') {
            decoded = currChar.concat(decoded);
            currChar = stack.pop();
        }

        let num = '';
        currChar = stack.pop();

        while (!Number.isNaN(Number(currChar))) {
            num = currChar.concat(num);
            currChar = stack.pop();
        }

        stack.push(currChar);
        stack.push(decoded.repeat(Number(num)));
    }

    return stack.join('');
};
