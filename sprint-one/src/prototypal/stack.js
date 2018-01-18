var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.count
  },
  push: function(value) {
    this.count += 1;
    this.storage[this.count] = value
  },
  pop: function() {
    if (this.count > 0) {
      var temp = this.storage[this.count]
      delete this.storage[this.count]
      this.count -= 1;
      return temp
    }
  }
}
