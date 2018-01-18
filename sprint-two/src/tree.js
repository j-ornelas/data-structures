var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
