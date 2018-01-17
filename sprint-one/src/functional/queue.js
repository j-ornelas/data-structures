var Queue = function() {
  var someInstance = {};
  var count = 0;
  var lowestCount = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value
    count += 1;
    return storage[count]
  };

  someInstance.dequeue = function() {
    /*
    temporarily saves the last element
    removes the last element (storage[0])
    so now, there's no storage[0]
    storage [0] = storage[key + 1]
    if storage[key] is undefined; break
    */
    var toDelete = storage[0];
    delete storage[0];
    
    for (key in storage){
      if (storage[key] === undefined){
        break;
      }
      storage[key - 1] = storage[key];
    }
    count -= 1;
    return toDelete;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };
  return someInstance;
};
