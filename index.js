// У нас є якийсь юзер

const userTelephone1 = '380994875717';
const userTelephone2 = '380994875358';
const userTelephone3 = '380994871234';

const userTelephones = {
  0: '380994875717',
  1: '380994875358',
  2: '380994871234'
}

// Масив (Array)

// ОГолошення масиву

// 1 спосіб
const arr = [2, 4, 6, 7, 150, 789, 123];

// 2 спосіб
const arr2 = new Array(2, 4, 6, 7);

// Cпособи доступу до елементів масиву
arr[0]; // зчитування значень елементів масиву
arr[0] = 200; // присвоєння нових значень для елементів масиву

// +Задача: вивести всі значення масиву в консолі


// варіант 1
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// варіант 2

// for(let i = 0; i < arr.length; i++) {
//   // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
//   console.log(arr[i]);
// }


// Задача: у нас є масив чисел. Вивести на консоль тільки парні числа цього масиву
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbersArray.length; i++) {
  if(numbersArray[i] % 2 === 0) {
    console.log(numbersArray[i]);
  }
}