// LIFO

// Last in - first out


// stack overflow - помилка, яка виникає при переповненні стеку

/*

push - вставляємо елемент на вершину стеку
pop - видалення елементу з вершини стеку і повернення видаленого елементу
isEmpty - повертає true, якщо стек пустий // false - якщо стек не пустий
pick - повертає останній елемент, але нічого не робить із ним і не видаляє зі стеку

*/

class Stack {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._size = 0;
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  get maxSize() {
    return this._maxSize;
  }

  set size(newValue) {
    throw new Error('Access denied');
  }

  set maxSize(newValue) {
    throw new Error('Access denied');
  }

  push(value) {
    if(this.size >= this.maxSize) {
      throw new Error('Stack overflow');
    }
    this[`_${this.size}`] = value;
    this._size++;

    return this.size;
  }

  pop() {
    if(this.size > 0) {
      const lastItem = this[`_${this.size - 1}`];
      delete this[`_${this.size - 1}`];
      this._size--;

      return lastItem;
    }
  }

  pick() {
    return this[`_${this.size - 1}`];
  }
}

const myStack = new Stack(4);