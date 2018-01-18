var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value
  this.count += 1;
  return this.storage[this.count]
}

Queue.prototype.dequeue = function() {
  var toDelete = this.storage[0];
    for (key in this.storage){
      if (this.storage[key] === undefined){
        break;
      }
      this.storage[key - 1] = this.storage[key];
    }
  this.count -= 1;
  return toDelete;
}

Queue.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
}
