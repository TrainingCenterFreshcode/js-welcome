/* Задача 1

Дано масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву

*/

const numArr = [3, 6, 8, 2, 3, 5, 1];

function sumOfElementsArr(arr) {
  let res = 0; // 1. Створення змінної, де ми накопичуємо суму

  for (let i = 0; i < arr.length; i++) { // 2 крок: циклічне накопичення суми
    res += arr[i]; // res = res + arr[i]
  }

  return res; // 3 крок: повернення результату
}
console.log(sumOfElementsArr(numArr)); // 28
