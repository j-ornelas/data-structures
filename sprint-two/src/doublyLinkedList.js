var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // make new node with input value
    var node = new Node(value);
    node.previous = this.tail;
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

  list.removeTail = function () {
    this.tail = this.tail.previous;
    delete this.tail.next;
    this.tail.next = null;
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
  node.previous = null;
  return node;
};

