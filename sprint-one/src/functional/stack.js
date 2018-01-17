var Stack = function() {
  var someInstance = {};
  var count = 0

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count += 1;
    return storage[count]
  };

  someInstance.pop = function() {
    delete storage[count]
    count -= 1;
    return storage[count]
   
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };
  return someInstance;
};
