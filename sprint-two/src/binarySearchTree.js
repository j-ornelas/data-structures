//JO REPO
var BinarySearchTree = function(value) {
  // this.mother = {};
  this.value = value;
  this.left = null;
  this.right = null;


};

BinarySearchTree.prototype.insert = function(value) {
  // var isEmpty = function isEmpty(obj) {
  //   for (var key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // if (isEmpty(this.mother)) {
  //   this.mother = new BinarySearchTree(value);
  //   return;
  // }

  var traverse = function(node) {
    if (value > node.value && node.right === null) {
      node.right = new BinarySearchTree(value);
    } else if (value < node.value && node.left === null) {
      node.left = new BinarySearchTree(value);
    } else if (value > node.value && typeof node.right === 'object') {
      traverse(node.right);
    } else if (value < node.value && typeof node.left === 'object') {
      traverse(node.left);
    }

  };
  traverse(this);
  
  
};

BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
 
// var Node = function(value, leftChild = null, rightChild = null, parent = null) {

//   this.left = leftChild;
//   this.right = rightChild;
//   this.parent = parent;
//   this.value = value;
// };