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
    // if (count - lowestCount === 0){
    //   return undefined;
    // }
    var toDelete = storage[0]
    console.log(storage)
    delete storage[0]
    lowestCount += 1;
    count -= 1;
    debugger;
    console.log(storage)
    return toDelete;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };
  console.log(storage)
  return someInstance;
};
