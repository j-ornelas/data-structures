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

    if (storage[0] === undefined){
      return undefined
      // i think this is where we need to focus
    };

    // var toDelete = storage[0]
    // console.log(storage)
    // delete storage[0]
    // lowestCount += 1;
    // count -= 1;
    // console.log(storage)
    // return toDelete;
    var toDelete = storage[lowestCount];
    delete storage[lowestCount];
    for (key in storage){
      storage[key] = storage[key-1];
    }
    count -= 1;
    console.log(toDelete);
    return toDelete;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };
  return someInstance;
};
