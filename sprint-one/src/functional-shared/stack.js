var Stack = function() {
  var count = 0;
  var someInstance = {
    size: function() {
      return count < 0 ? 0 : count;
    },
    push: function() {
      count++;
    },
    pop: function () {
      count -= 1;
    }

  }
  return someInstance

  // count = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {someInstance: {size: 0}};
