/* Задача 2

Дано масив:

const array = [2, 44, 11, 234, 8, 2, 4, 1];

Задача:
Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100

*/

const array = [2, 44, 11, 234, 8, 2, 4, 1];

// variant 1
function plus100(item) {
  return item + 100;
}

const newArray = array.map(plus100);

// variant 2
// const newArray = array.map((item) => item + 100);