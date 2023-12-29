/* Loops - Цикли

while (умова) {
  код, який повторюється, поки умова = true
}

Написати у консолі 10 разів цифру 1


while(кількість_консоль_логів < 10) {
  console.log(1);
  кількість_консоль_логів++;
}

*/

// let iterator = 0; // лічильник консоль.логів

// Ітерація - один прохід циклу (коло)

// while(iterator < 10) {
//   console.log(iterator);
//   iterator++;
// }

// Нескінченний цикл

// while(true) {
//   console.log('Не вірно');
//   break;
// }

// Задача: зробити 10 повторів (ітерацій) циклу і вивести на консоль парні значення лічильника

let i = 0; // i += 2 || 0 -> 2 -> 4 -> 6 -> 8 -> 10 (false)
          //  i++    || 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 (false)
while(i < 10) {
  if(i % 2 === 0) {
    console.log(i);
  }

  i += 2;
}

/*

Дано правильний пароль = qwerty1234

prompt
Запитуйте у користувача пароль через prompt, поки пароль, який вводить користувач, не співпаде з тим еталонним паролем, який лежить у змінній

*/