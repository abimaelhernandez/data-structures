var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    newNum: 1,
    oldNum: 1,
    storage: {}
  }
  _.extend(someInstance, queueMethods)
  return someInstance;
}

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.newNum] = value;
    this.newNum++;
  },
  dequeue: function() {
    var counted = this.storage[this.oldNum];
    delete this.storage[this.oldNum];
    this.oldNum++;
    return counted;

  },
  size: function() {
    if (this.newNum - this.oldNum > 0) {
      return this.newNum - this.oldNum;
    } else {
      return 0;
    }
  }
};
