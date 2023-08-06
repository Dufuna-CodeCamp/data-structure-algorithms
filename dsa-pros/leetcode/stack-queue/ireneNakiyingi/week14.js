// STACKS A ND QUEUES
//WEDNESDAY https://leetcode.com/problems/implement-queue-using-stacks/

//failed some tests

//1. https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    var emptyList = []
    for(var i=0; i<s.length;i++){
        if(s[i] === '(' ||s[i] === '{'|| s[i] === '['){
            currentElement = emptyList.push(s[i])
            
        } else if (s[i]===')' && emptyList[emptyList.length - 1] === '(' && emptyList.length !== 0){
            topElement = emptyList.pop()
            
        }else if (s[i]===']' && emptyList[emptyList.length - 1] === '[' && emptyList.length !== 0){
            topElement = emptyList.pop()
            
        }else if (s[i]==='}' && emptyList[emptyList.length - 1] === '{' && emptyList.length !== 0){
            topElement = emptyList.pop()
            
        }  else{
            return false; //if not found?
        } 
    }
    return emptyList.length == 0;
    //if(currentElement !== topElement){
      //          return false
        //}else{
          //  return true
        //}
    // results change if i i remive lower code
    //runtime 60ms memory 41.89mb
    // still runs without it  
};

//2. https://leetcode.com/problems/next-greater-element-i/

//failed some tests

//3. https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    answer = [];
    for (var i =0; i<prices.length;i++){
        // for price at i there's no discount
        let discount = null;
        //as we look at j which is 1 position ahead of i
        for(var j = i+1; j<prices.length;j++){
            if(prices[i]< prices[j]) {
                //skip it
                continue;
                //set the discount value to j index
            }
            discount = prices[j];
            break;
        }
        //as long as discount is prices[j] ie not null

        if(discount != null){
            let final = prices[i]- discount;
            answer.push(final);
        } else{
            answer.push(prices[i])
        }
       
    }
    return answer;
    
}; // memory not good 44.20mbs runtime 58ms