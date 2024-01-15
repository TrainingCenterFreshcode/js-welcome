// array.filter - використовується для створення нового масиву, який місти лише ті елементи, які задовільняють певній умові (не мутуючий)
// array.filter(callback)
// Колбек буде викликатись для кожного елементу масиву ->
// -> ця колбек-функція всередині filter вона повинна повертати true/false для кожного елементу масиву

const numbersArray = [5, 3, -9, 21, -5, 1, -2, 4];

// Відфільтрувати масив numbersArrаy, щоб залишились тільки додатні числа (числа > 0)

function filterFunction(item) {
  // if(item > 0) {
  //   return true;
  // } else { // item < 0
  //   return false;
  // }

  return item > 0
}

const filteredNumbersArray = numbersArray.filter(filterFunction);