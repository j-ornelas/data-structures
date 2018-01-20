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

BinarySearchTree.prototype.contains = function(target) {
  var found = false;
  var search = function(node) {
    if (target === node.value) {
      found = true;
    } else if (target > node.value && node.right !== null) {
      search(node.right);
    } else if (target < node.value && node.left !== null) {
      search(node.left);
    }
  };
  search(this);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // var parent
  var callback = function(node) {
    cb(node.value);
    if (node.left !== null) {
      callback(node.left);
    }
    if (node.right !== null) {
      callback(node.right);
    }
  };
  callback(this);
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