
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
//run time 69ms memeory 43.8mb
//space and time??
 // how to get each value out of string then multiply resulting value to get ans
 // cannot use int()*
 /* let product = num1;
 product *= num2;
 return (""+Math.floor(product)+"") works but not correct*/
// trial 3 use stacks
var multiply = function(num1, num2) {
 const stack = [];
 num1 = num1.split('').reverse(); // since multiplication os done right to left nit left to right
 num2 = num2.split('').reverse();

 for (i=0;i<num1.length;i++){ //iterate throuhgh num1
     for (j=0;j<num2.length;j++){ //iterate through num2
         var product = num1[i]*num2[j];
         // adding to the stack
         var stackAdd = stack[i+j];
         stack[i+j]= stackAdd ? stackAdd + product: product;
     }
    
 } 
 // for loop through the stack
     for(i=0;i< stack.length;i++){
         const stepStack = Math.floor(stack[i]/10);
         stack[i]= stack[i]%10; //return whole numbers ie carry
         if (stack[i+1]){
             stack[i+1] += stepStack;
         } else if(stepStack>0){
             stack[i+1] = stepStack;
         }
     }
     // had to add replace to remove repeated values 
 return stack.reverse().join('').replace(/^(0(?!$))+/, "")
};
//3.re arrange strings
//eh 
//in progress


//4 Regular expression matching ------ hard