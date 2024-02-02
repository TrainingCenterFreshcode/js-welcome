// Queue

/*

1. Enqueue - вставляє елемент в кінець черги
2. Dequeue - видаляє елемент з початку черги

*/

class Queue {
  constructor() {
    this._head = 0;
    this._tail = 0;
  }

  get size() {
    return this._tail - this._head;
  }

  enqueue(value) {
    // tail відповідає на питання, який елемент має бути останнім
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }

  dequeue() {
    if(this.size > 0) {
      const firstItem = this[this._head];
      delete this[this._head];
      this._head++;
      return firstItem;
    } else {
      return undefined;
    }
  }
}

const queue = new Queue();