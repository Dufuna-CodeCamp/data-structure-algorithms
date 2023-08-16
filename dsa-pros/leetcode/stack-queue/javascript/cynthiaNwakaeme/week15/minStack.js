let MinStack = function () {
  this.storage = [];
  this.size = 0;
  this.minStorage = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.minStorage.length === 0 || val <= this.minStorage[this.minStorage.length - 1]) {
    this.minStorage[this.minStorage.length] = val;
  }
  this.storage[this.size] = val;
};

/**
 * @return {number}
 */
MinStack.prototype.pop = function() {
  if (this.storage[this.size] === this.minStorage[this.minStorage.length - 1]) {
    this.minStorage.splice(-1);
  }

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
  // let arr = Object.values(this.storage);
  // return Math.min(...arr);
  return this.minStorage[this.minStorage.length - 1];
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
console.log(minStack);

minStack.push(0);
console.log(minStack);

minStack.push(-3);
console.log(minStack);

console.log(minStack.pop());
console.log(minStack);

console.log(minStack.pop());

console.log(minStack.getMin());
