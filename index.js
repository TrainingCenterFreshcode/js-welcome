
/* Задача 2

Написати функцію, яка перевіряє, чи є переданий їй рядок - паліндромом. не зважаючи на регістр
Паліндром - це коли рядок з обох сторін читається однаково

Anna - паліндром
Mama - не паліндром
Namman - паліндром

*/


function checkPalindrom(str) {
  /*
    +1. Приймаємо строку
    +2. Приводимо строку до нижнього регістру
    +3. Перевернути строку
    +4. Порівнюємо перевернуту строку з пункту 3 з оригінальною строкою
  */

  // Реалізація 1 і 2 пункту
  const originalStr = str.toLowerCase();

  // Реалізація 3 пункту
  const reversedStr = originalStr.split('').reverse().join('');

  // Реалізація 4 пункту
  return originalStr === reversedStr;
}

console.log(checkPalindrom('Papa')); // false
console.log(checkPalindrom('Anna')); // true