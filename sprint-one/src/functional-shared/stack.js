var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var count = 0;
  var storage = {}
  var someInstance = {
    size: function() {
      return count < 0 ? 0 : count;
    },
    push: function(value) {
      storage[count] = value
      count += 1;
      return storage[count]
    },
    pop: function () {
      delete storage[count]
      count -= 1;
      return storage[count]
    }
  }
  return someInstance
};

var stackMethods = {
  size: function() {
    return count < 0 ? 0 : count;
  },
  push: function(value) {
    storage[count] = value
    count += 1;
    return storage[count]
  },
  pop: function () {
    delete storage[count]
    count -= 1;
    return storage[count]
  }
};
