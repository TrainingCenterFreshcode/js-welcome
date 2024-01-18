'use strict';

// rest operator - оператор залишкових параметрів
// rest - залишок (з англ.)
// .., .., .., .., -->> []

const arrowSum = (...restArrayOfNumbers) => {
  let sum = 0;

  for(let i = 0; i < restArrayOfNumbers.length; i++) {
    sum += restArrayOfNumbers[i];
  }

  return sum;
}

// spread operator
// spread - розпакувати (з англ.)
// [] -->> .., .., .., ..,

const numbers = [1, 2, 3, 4, 5];

function sum (a, b, ...restArray) {
  console.log(restArray);
  return a + b;
}

// console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
console.log(sum(...numbers)); // spread operator
// розпакували всі значення масиву numbers в виклик функції sum

// Як розрізняти rest і spread оператор (...)?

// Якщо оператор стоїть у аргументах функції, то це rest - він просто бере і збирає всі залишки параметрів
// Якщо ми використовуємо оператор на масиві, то це spread - він бере і розбиває масив на купу елементів





// Приклад використання spread оператора № 1

const numbersMath = [2, 3, 1, 5, 4];

Math.min(...numbersMath); // 1

// Приклад використання spread оператора № 2

// Задача: зробити масив з назвою copyArray в який будуть входити всі елементи з масиву numbersMath

const copyArray = [...numbersMath];


// Задача

const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 11, 12, 13, 14, 15];

// Потрібно зклеїти ці 2 масиви
// Не можна використовувати метод concat
// Використовуйте spread оператор
// [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]

const resultArray = [...array1, ...array2];