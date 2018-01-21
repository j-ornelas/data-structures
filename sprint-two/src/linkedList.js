var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // make new node with input value
    var node = new Node(value);
    // point it to the current tail
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } 
    var previousNode = this.tail;
    previousNode.next = node;
    this.tail = node;
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHead;
  };





  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
