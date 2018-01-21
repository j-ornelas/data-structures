var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'object') {
    var objKey = JSON.stringify(item);
    this._storage[objKey] = true;
  }
  if (typeof item === 'number') {
    var key = 'int' + item;
    this._storage[key] = true;
    // console.log(this._storage);
  }
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  if (typeof item === 'object') {
    var objToCheck = JSON.stringify(item);
    return this._storage[objToCheck];
  }
  if (typeof item === 'number') {
    var numToCheck = 'int' + item;
    return this._storage[numToCheck] === true;
  }
  return this._storage[item] === true;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

