class MyArray {
  constructor() {
    this.length = 0;
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }

  pop() {
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
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    // 1. Просто створили пустий масив - він буде нашим результуючим масивом
    const resultArray = new MyArray();

    // 2. Пройтись по поточному масиву від початку і до кінця
    for(let i = 0; i < this.length; i++) {
      // Запихуємо у результуючий масив значення, яке нам буде повертати (return) колбек
      resultArray.push(callback(this[i], i, this));
    }

    // 3. Повернути як результат роботи методу map - результуючий масив
    return resultArray;
  }
}

const arr = new MyArray();

arr.push(3, 2, 1, 2, 3);

// Задача: створити новий масив, який буде містити квадрати чисел з масиву arr

const doubleNumbers = arr.map((item) => {
  return item ** 2;
});

// const doubleNumbers = arr.map(item => item ** 2);