'use strict';

// Задача:
/*
У функції sum знайди суму двох елементів, а усі інші аргументи, які передали у функцію ззовні, при виклику
- покласти у масив
*/

// rest operator - оператор залишкових параметрів
// rest - залишок (з англ.)
// .., .., .., .., -->> []

function sum(a, b, ...arrayOfRestArguments) {
  console.log(arrayOfRestArguments);
  return a + b;
}

console.log(sum(1, 2, 3, 5, 10, 25)); // 3

// function f(arg1, ...rest, arg2) { // помилка

// }

// Задача: написати стрілочну функцію, яка сумує будь-яку кількість чисел

// const arrowSum = (...restArrayOfNumbers) => {
//   let sum = 0;

//   for(let i = 0; i < restArrayOfNumbers.length; i++) {
//     sum += restArrayOfNumbers[i];
//   }

//   return sum;
// }

/* Задача

Напишіть варіант функції arrowSum з використанням метода reduce
При виклику reduce передайте йому стрілковий колбек =)

*/

const arrowSum = (...restArray) => { // variant 1
  const sum = restArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

// variant 2
// const arrowSum = (...restArray) => restArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
