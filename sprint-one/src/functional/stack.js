const Stack = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;

  };

  someInstance.pop = function() {
    count--;
    var counted = storage[count]
    delete storage[count]
    return counted;
  };

  someInstance.size = function() {
   if(count > 0){
     return count ;
   }else{
     return 0;
      }
  };
  return someInstance;
};
