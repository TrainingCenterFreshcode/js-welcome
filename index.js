/* Задача 2

Дано два масиви:

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

Повернути з функції масив, що складається з різниці двох масивів (тобто, тих значень, які не повторюються в обох масивах)

// Логіка:
Ви приймаєте 2 масиви
Вам потрібно зробити новий масив, але там не повинно бути дублювань


*/

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

const twoArraysWithoutDoubles = (array1, array2) => [...new Set([...array1, ...array2])];

const arrayWithoutDoubles = twoArraysWithoutDoubles(arr1, arr2);