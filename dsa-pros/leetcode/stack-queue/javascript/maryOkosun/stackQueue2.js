/* <------------------1-------------------> */
var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t); //appends timestamp t to the array
  while (this.requests[0] < t - 3000) {
    //we want to keep comparing the first request if it is within the 3000 seconds timeframe
    this.requests.shift(); //if it is not, then remove the call
  }
  return this.requests.length; //return the length of the request
};

/* <------------------2-------------------> */

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};

/* <------------------3-------------------> */

var simplifyPath = function (path) {
  const stack = [];
  const splitPath = path.split("/"); // Split path by slashes
  for (const val of splitPath) {
    if (val === "..") {
      stack.pop(); // Move up a directory (pop from stack)
    } else if (val !== "" && val !== ".") {
      stack.push(val); // Push valid directory name to stack
    }
  }

  return "/" + stack.join("/"); // Join val with single slashes
};
