var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeData = Node(value)
    if (list.head === null) {
      list.head = nodeData
      list.tail = list.head
    } else {
      list.tail.next = nodeData
      list.tail = list.tail.next
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var oldHeads = list.head.value
    list.head = list.head.next;
    return oldHeads
  };

  list.contains = function(target) {
    var theNode = list.head;
    while (theNode) {
      if (theNode.value === target) {
        return true;
      }
      theNode = theNode.next;
    }
    return false;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
