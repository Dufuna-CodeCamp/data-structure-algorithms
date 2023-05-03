
/*
https://leetcode.com/problems/split-a-string-in-balanced-strings/
https://leetcode.com/problems/multiply-strings/
https://leetcode.com/problems/reorganize-string/
https://leetcode.com/problems/regular-expression-matching/

*/
//1. split a string
 // runtime 61ms memeory 42.6
 //time cplexity O(n)-- legth of string // space ? O(n); goes through once?

var balancedStringSplit = function(s) {
    //building on substrings
    // must split the string into possible substrings, then get the number of el in each ir Rs and LS?
    //count no of substrings that fit criteria
    let rlen = 0; // no of Rs
    let llen = 0; //no of Ls
    let ans = 0; // variable that stores number of strings
    // iterate through the given string
    
        for(let i = 0; i < s.length; i++){
 
           // Increment the variable r if the
           // character in the String is 'R'
            if (s[i] == 'R'){
               rlen++;
            }
           // Increment the variable l if the
           // character in the String is 'L'
            else if (s[i] == 'L'){
               llen++;
            }
           // If r and l are equal, ir number of Ls and Rs
           // then increment ans
            if (rlen == llen){
               ans++;
            }
        }
 
        // Return thefinal value
        return ans;
};

//2.Multiply strings
wow
//3.re arrange strings
eh


//4 Regular expression matching ------ hard