const Tree = function(value) {
  let newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  //create a child
  let newChild = new Tree(value);
  //push into children array
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  let children = this.children
  //loop through the children array
  for (let i = 0; i < children.length; i ++) {
    //compare if this value is equal to target
    var child = children[i];
    if (child.contains(target)) {
      //return true
      return true;
    }
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
