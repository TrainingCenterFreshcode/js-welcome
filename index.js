/*
Задача: написати функцію, яка зводить число у певну ступінь і приймає 2 аргументи:
- число, яке потрібно звести у ступінь    -- x
- ступінь, у яку потрібно звести число    -- n
*/

// Ітеративне мислення: цикл for

function pow(x, n) {
  let result = 1; // змінна у якій ми будемо накопичувати добуток

  // множимо result на x , n разів у циклі
  for(let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

// Рекурсивне мислення: спрощуємо собі завдання і викликаємо функцією саму себе

function powRecursive(x, n) {
  if(n === 1) {
    return x;
  } else {
    return x * powRecursive(x, n - 1);
  }
}

/*            if n === 1 -->> x
            /
powRecursive(x,n) = 
            \
              else --->> x * powRecursive(x, n - 1)
*/

// x^n = x * x^(n-1)

/*

1. powRecursive(2, 4) --->>> 2 * powRecursive(2, 3)
2. powRecursive(2, 3) --->>> 2 * powRecursive(2, 2)
3. powRecursive(2, 2) --->>> 2 * powRecursive(2, 1)
4. powRecursive(2, 1) --->>> 2

*/

/*

Особливості роботи:
1. Рекурсія робить виклик функції простішим, потім ще більш простішим і так далі, доки результат не стане очевидним (досягнення бази рекурсії)
2. Рекурсивне рішення, як правило, коротше ніж ітераційне

*/

// Кількість вкладених викликів - глибина рекурсії

// Ми стремимся до того, що глибина рекурсії не має перевищувати 10000 викликів