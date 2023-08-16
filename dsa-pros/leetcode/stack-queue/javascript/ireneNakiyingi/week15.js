//1. number of receent calls
var RecentCounter = function() { // we start with empty array or counter
    this.g =[]
};
/** 
 * @param {number} t
 * @return {number}
 */ // past 3000 so at t -3000
RecentCounter.prototype.ping = function(t) { // enqueue and add things tp g using push; here we are adding time t
    this.g.push(t);
    while (this.g[0]<t-3000){
        this.g.shift() //removes first element and returns it
    }
    return this.g.length // ie size ie number of requests
};
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// run time 188 ms memory 55.95

//2. min stack

//3. path