const arr = [2, 4, 1, 3, 7, 3, 2, 1, 3, 5, 2, 8, 2, 4, 1];

// Задача: реалізувати функцію лінійного пошуку якогось значення в масиві

function linearSearch(array, value) { // лінійна складність алгоритму
  for(let i = 0; i < array.length; i++) {
    if(array[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(linearSearch(arr, 2));

// Лінійна складність, коли Big O, тобто, коли стільки ітерацій (операцій), скільки в нас вхідних даних





// Квадратична складність

// Задача: вивести таблицю множення

function multyTable(limit) { // квадратична складність
  const table = [];
  for(let i = 1; i <= limit; i++) {
    for(let j = 1; j <= limit; j++) {
      table.push(`${i} * ${j} = ${i * j}`)
    }
  }

  return table;
}

// multyTable(1); // 1 (1^2 = 1)
// multyTable(2); // 2 (2^2 = 4)
// multyTable(3); // 3 (3^2 = 9)

// Квадратична складність - коли ми на виході отримуємо кількість вхідних даних (n) в квадраті




// Логарифмічна складність ---> 100 вхідних даних припадає приблизно 6 операцій

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, whatToFind) { // need review!!
  if(whatToFind > array[array.length - 1]) {
    return -Infinity; // на випадок, якщо такого числа точно немає у масиві
  }

  let start = 0;
  let end = array.length - 1;
  let middle = Math.round((start + end) / 2);

  while(true) {
    if(array[middle] === whatToFind) {
      return middle;
    }
    if(array[middle] < whatToFind) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    } else {
      end = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}