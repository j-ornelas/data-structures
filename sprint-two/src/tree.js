var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // newTree.parent = null

  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // var found = false
  var found = false;
  // search function to check each level of tree
  var search = function(node) {
    if (node.value === target) {
      found = true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        search(node.children[i]);  
      }
    }
  };
  search(this);
  return found;
};

treeMethods.removeFromParent = function() {
  // create empty array as accumulator
  var acc = [];
  // (get children array of parent)
  var siblings = this.parent.children;
  // loop through siblings and
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i].value !== this.value) {
      acc.push(siblings[i]);
    }
  }
  //   if siblings[i].value is not this.value 
  // push to accumulator
  this.parent.children = acc;
  this.parent = null;
  return this; 
};

treeMethods.traverse = function(callback) {
  var kids = this.children;
  for (var i = 0; i < kids.length; i++) {
    callback(kids[i]);
    kids[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
