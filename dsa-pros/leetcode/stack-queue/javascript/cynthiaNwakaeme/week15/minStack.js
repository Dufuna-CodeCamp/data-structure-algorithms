let MinStack = function () {
  this.storage = {};
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.size++;
  this.storage[this.size] = val;
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function() {
  let remove = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return remove;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.size]
};

/**
 * @return {number}
 */

MinStack.prototype.getMin = function() {

  let arr = Object.values(this.storage);
  return Math.min(...arr);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
// console.log(minStack);

minStack.push(0);
// console.log(minStack);

minStack.push(-3);
// console.log(minStack);

// console.log(minStack);

// console.log(minStack);

// console.log(minStack.pop());
// console.log(minStack.pop());

console.log(minStack.getMin());
