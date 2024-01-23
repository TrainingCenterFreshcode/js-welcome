function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  (this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }),
    (this.pop = function () {
      if (this.length > 0) {
        // 1. Зберегти останній елемент
        const lastItem = this[this.length - 1];
        // 2. Видалити останній елемент з масиву
        delete this[this.length - 1];
        // 3. Зменшити довжину масиву на 1
        this.length--;
        // 4. Повернути останній елемент
        return lastItem;
      } else {
        return undefined;
      }
    }),
    (this.forEach = function (callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    });
}

MyArray.prototype = new MyArrayPrototype(); // прототипне посилання
