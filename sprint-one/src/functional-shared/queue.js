const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    num: 1,
    oldNum: 1,
    storage: {}
  }
  _.extend(someInstance, queueMethods)
  return someInstance;
}

const queueMethods = {

  enqueue: function(value) {
    this.storage[this.num] = value;
    this.num++;
  },
  dequeue: function() {
    let counted = this.storage[this.oldNum];
    delete this.storage[this.oldNum];
    this.oldNum++;
    return counted;

  },
  size: function() {
    if (this.num - this.oldNum > 0) {
      return this.num - this.oldNum;
    } else {
      return 0;
    }
  }
};
