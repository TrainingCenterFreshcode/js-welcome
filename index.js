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



/*

Задача: у нас є об'єкт, ключем в якому є день тижня, а значенням - плани на цей день
Прийняти від користувача (через промпт) назву дня тижня і видати алерт, що заплановано у користувача на цей день

*/

const obj = {
  Mon: 'drive lesson',
  Tue: 'dantist visit',
  Wed: 'go to party',
  Thu: 'hard work',
  Fri: 'chill',
  Sat: 'go to park'
}

const userValue = prompt('Type your week day to get your plan: \n Monday = Mon, \n Tuesday = Tue, \n ...');
alert(obj[userValue] ? obj[userValue] : 'Error happened');