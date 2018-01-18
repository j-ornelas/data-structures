class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.count] = value
    this.count += 1;
    return this.storage[this.count]
  }

  dequeue() {
    var toDelete = this.storage[0];
      for (var key in this.storage){
        if (this.storage[key] === undefined){
          break;
        }
        this.storage[key - 1] = this.storage[key];
      }
    this.count -= 1;
    return toDelete;
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }

}
