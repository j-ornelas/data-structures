var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  return someInstance
};

var stackMethods = {
  size: function() {
    return this.count
  },
  push: function(value) {
    this.count += 1;
    this.storage[this.count] = value
    // this.count += 1;

    // console.log(this.storage[count])
    return this.storage[this.count]

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
