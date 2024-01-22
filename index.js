const date = new Date(); // за замовченням буде створена поточна системна дата та час
const date1 = new Date('12-31-2023'); // 31.12.2024

console.log(date1.getDate()); // 31; getDate - використовується для отримання дня місяця з дати
console.log(date1.getDay()); // 0; getDay - використовується для отримання дня тижня з дати (0 - неділя ... 6 - субота)
console.log(date1.getFullYear()); // 2023; getFullYear - використовується для отримання року з дати
console.log(date.getHours()); // getHours - використовується для отримання години з дати
console.log(date1.getTime()); // getTime - використовується для отримання кількості мілісекунд, які пройшли з 1 січня 1970 року 00:00:00

// Задача: знайти суму першого 1000000 чисел

let sum = 0; // 1. Створюємо змінну

const time1 = new Date(); // відрізок часу ДО початку операції 2

for(let i = 0; i <= 1000000; i++) { // 2. Накопичуємо суму
  sum += i;
}

const time2 = new Date(); // відрізок часу ПІСЛЯ операції 2

console.log(sum); // 3. Консолимо накопичену суму

console.log(time2.getTime() - time1.getTime()); // кількість затрачених мілісекунд на операцію 2


// Приклад з консоль.таймами

console.time('operation'); // Включили таймер

let sum2 = 0;
for(let i = 0; i <= 1000000; i++) { // 2. Накопичуємо суму
  sum2 += i;
}

// ......

console.timeEnd('operation');
