

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  console.log(this)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    return; 
  } 
  // else, if any element in array[0] === k
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  } // if bucket[bucket.length - 1] =/= [k,v]  ???
  bucket.push([k, v]); // if tuple exists in the bucket
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  // return 'error, item was not found!';
};

HashTable.prototype.remove = function(k) {
  var acc = [];
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] !== k) {
      acc.push(bucket[i]);
    }
  }
  this._storage.set(index, acc);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


