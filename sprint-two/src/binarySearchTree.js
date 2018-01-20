var BinarySearchTree = function(value) {
  this.mother = null;
  console.log(this)
  
};

BinarySearchTree.prototype.insert = function(value) {
  var mother = this.mother;
  if (mother === null) {
    this.mother = new Node(value);
    return;
  }

  if (value > mother.value) {
    mother.right = new Node(value);
  }

  

};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
var Node = function(value) {

  this.left = null;
  this.right = {};
  this.value = value;
};