const RecentCounter = function () {
  this.arr = []
  this.left = 0
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);

  while (this.arr[this.arr.length - 1] - this.arr[this.left] > 3000){
    this.left++
  }

  return this.arr.length - this.left
};


/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const recentCounter = new RecentCounter();

console.log(recentCounter.ping(1))
console.log(recentCounter.ping(100))
console.log(recentCounter.ping(300))
console.log(recentCounter.ping(400))
console.log(recentCounter.ping(500))
console.log(recentCounter.ping(3000))
console.log(recentCounter.ping(3001))
console.log(recentCounter.ping(3002))