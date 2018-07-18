var Queue = function() {
  let num = 1;

  let oldNum = 1;
  const someInstance = {};
  // Use an object with numeric keys to store values
  let storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[num] = value;
    num ++;
  };

  someInstance.dequeue = function() {
    let counted = storage[oldNum];
    delete storage[oldNum];
    oldNum++;
    return counted;
  };

  someInstance.size = function() {
    if (num - oldNum > 0) {
      return num - oldNum;
    } else {
      return 0 ;
    }
  }
  return someInstance;

};
