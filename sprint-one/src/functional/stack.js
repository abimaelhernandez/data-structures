const Stack = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};
  let count = 0;
  // Implement the methods below
  someInstance.push = (value) => {
    storage[count] = value;
    count++;
  };

  someInstance.pop = () => {
    count--;
    let counted = storage[count]
      delete count
      return counted;
  };

  someInstance.size = () => {
   if(count > 0){
     return count ;
   }else{
     return 0;
      }
  };
  return someInstance;
};
