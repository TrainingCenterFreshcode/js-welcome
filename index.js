/* Задача 2

Дано масив [3, 6, 8, 2, 3, 5, 1].
Написати функцію, яка знаходить найбільше значення серед елементів масиву.

1. Десь запам'ятати найбільше число, яке ми зустріли
2. Порівняти його з наступним елементом масиву.
Якщо елемент масиву опииться більшим ніж те число, яке ми запам'ятали, то саме цей елемент масиву стає найбільшим запам'ятовуваним


const numMaximum = 5;
const currentNum = 4;

if(numMaximum > currentNum) {
  // ідемо далі
} else {
  numMaximum = currentNum;
}

*/

const numbersArray = [3, 6, 8, 2, 3, 5, 1];

function maxArray(array) {
  let maxNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) { // якщо поточний просматреваемій елемент масиву більше, ніж максимальне число, яке ми запам'ятали
      maxNumber = array[i]
    }
  }

  return maxNumber;
}

console.log(maxArray(numbersArray)); // 8
