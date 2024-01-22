
/* Задача 1

Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra'
Якщо заборонених слів у рядку немає - повертається false

checkSpam('buy ViAgRa now'); // true
checkSpam('free xxxxxxx'); // true
checkSpam('innocent rabbit'); // false

*/

// function checkSpam(str) { // variant 1
//   const lowStr = str.toLowerCase();
//   return lowStr.includes('viagra') || lowStr.includes('xxx');
// }

function checkSpam(str) { // variant 2
  const spamArray = ['viagra', 'xxx', 'drugs'];

  for(let i = 0; i < spamArray.length; i++) {
    if(str.toLowerCase().includes(spamArray[i])) {
      return true;
    }
  }

  return false;
}

console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxx'));
console.log(checkSpam('innocent rabbit'));

/* Задача 2

Написати функцію, яка перевіряє, чи є переданий їй рядок - паліндромом. не зважаючи на регістр
Паліндром - це коли рядок з обох сторін читається однаково

Anna - паліндром
Mama - не паліндром
Namman - паліндром

*/

