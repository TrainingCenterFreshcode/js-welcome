/*

Задача: у нас є об'єкт з різними версіями привітань для користувача.
Вивести користувачу привітання, залежно від значення, яке він ввів.

*/

const greets = {
  15: 'Hi',
  17: 'Ya, whats up',
  19: 'Hello',
  30: 'Good morning!'
}

const valueFromUser = 19;
                    // 19
console.log(greets[valueFromUser]); // Hello
// greets[19]