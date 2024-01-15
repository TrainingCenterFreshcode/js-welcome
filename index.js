// array.concat - використовується для об'єднання двох або більше масивів у новий масив (немутуючий)
// array.fill - використовується для заповнення всіх елементів масиву якимсь одним значенням (мутуючий)
// array.includes - використовується для перевірки наявності певного значення у масиві (немутуючий)
// array.indexOf - використовується для отримання першого входження певного значення у масиві (немутуючий)
// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву (немутуючий)
// array.push - використовується для додавання одного або кількох елементів у кінець (мутуючий)
// array.pop - використовується для видалення останнього елементу (мутуючий)
// array.shift - використовується для видалення першого елементу з початку масиву (мутуючий)
// array.unshift - використовується для додавання одного або декількох елементів на початок масиву (мутуючий)
// array.reverse - використовується для зміни порядку елементів у масиві на протилежний (мутуючий)
// array.slice - використовується для створення нового масиву, який складається тільки з якоїсь певної частини вихідного масиву (немутуючий)
// array.splice - використовується для зміни вмісту масиву шляхом видалення, заміни або додавання нових елементів (мутуючий)
// array.forEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для кожного елемента
// array.map - працює як forEach, тільки map буде повертати новий масив (не мутуючий)
// array.sort - використовується для сортування елементів в масиві (мутуючий)
// array.filter - використовується для створення нового масиву, який місти лише ті елементи, які задовільняють певній умові (не мутуючий)

/*

const numbersArray = [5, 3, -9, 21, -5, 1, -2, 4];
Створити новий масив, в який увійдуть тільки парні елементи початкового масива

*/

function filterFunction(item) {
  // if(item % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  
  return item % 2 === 0
}