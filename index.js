// array.concat - використовується для об'єднання двох або більше масивів у новий масив
// array.concat(array1, array2, ..., arrayN)

const array1 = [1, 2, 3, 4];
const array2 = array1.concat([222, 888, 333], [555555, 7777777]);
// console.log(array2);


// array.fill - використовується для заповнення всіх елементів масиву якимсь одним значенням
// array.fill(value, [start, [end]]); // start, end - не обов'язкові

const array3 = new Array(5);
array3.fill(1);


// array.includes - використовується для перевірки наявності певного значення у масиві
// array.includes(searchValue, [fromIndex])

const array4 = [2, 12, 1, 5, 8, 13, 12];
// console.log(array4.includes(120));


// array.indexOf - використовується для отримання першого входження певного значення у масиві
// array.indexOf(searchElement, [fromIndex])
// console.log(array4.indexOf(12));


// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву
// array.join([separator])
const array5 = ['Hello', 'world', 4, 2, 'hi'];
//console.log(array5.join(' <<--->> '));


// array.push - використовується для додавання одного або кількох елементів у кінець
// array.push(element1, ..., elementN);
const array6 = [2, 3, 4, 5];
array6.push(6, 7, 8, 9, 10);


// array.pop - використовується для видалення останнього елементу
array6.pop();
array6.pop();
array6.pop();