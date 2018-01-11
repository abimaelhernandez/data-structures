var Queue = function() {
  var newNum = 1
  
  var oldNum = 1
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newNum] = value
    newNum++
  };

  someInstance.dequeue = function() {
    var counted = storage[oldNum];
    delete storage[oldNum];
    oldNum++;
    return counted;
  };

  someInstance.size = function() {
    if (newNum - oldNum > 0) {
      return newNum - oldNum;
    } else {
      return 0
    }
  }
  return someInstance;
};
