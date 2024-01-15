// array.sort - використовується для сортування елементів в масиві (мутуючий)
// array.sort([compareFunction])

const numbersArray = [5, 3, 9, 21, 5, 1, 2, 4];

// Задача: відсортувати масив за зростанням

//numbersArray.sort(); // сортування за зростанням (unicode)

const lettersArray = ['bbb', 'abb', 'aaa', 'aba'];
//lettersArray.sort(); // сортування за зростанням (unicode)

// Задача: відсортувати масив numbersArray за зростанням

function compareFunction(a, b) { // функція-компаратор
  // a - поточне просматріваемое число
  // b - наступне число, яке слідує за поточним
  if(b > a) {
    // 4 (a), 6 (b)
    // відсортувати за зростанням
    return -1;
  } else { // b < a
    // 10 (a), 5 (b) --->>> 5, 10
    // відсортувати за зростанням
    return 1;
  }
}

// Функція-компаратор повинна повернути (return) одне з трьох можливих значень:
/*
-1 - спочатку йде число a, потім число b
0 - елементи залишаються на місці
1 - спочатку йде число b, потім число a
*/

numbersArray.sort(compareFunction);

const newNumbersArray = [3, 4, 1, 0, -5, 12, 13];

function compareNumbers(a, b) {
  // return a - b; // сортування у порядку зростання
  return b - a; // сортування у порядку спадання
}

newNumbersArray.sort(compareNumbers);