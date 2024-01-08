const user = {
  name: 'John',
  lastName: 'Doe',
  age: 20,
  'favorite color': 'red',
  movie: 'Blue moon',
  avatar: 'http://.....'
}

// for..in - використовуєть для перебору (ітерації) ключів в об'єкті
// НЕ ЦЕЙ for(;;)
/*

for (variable in object) {
  // Код, що виконується для кожної властивості
}

variable - змінна, яка буде приймати значення ключів властивостей
object - об'єкт, властивості (ключі) якого ми хочемо перебрати

*/

// Задача: у об'єкті user вивести назви всіх ключів і властивості

for (let key in user) {
  console.log(`${key} ---> ${user[key]}`); // key ---> value
}

/*

Задача: написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені *...*
А ключі - "..."

*/

const obj = {
  key1: 'value 1'
}

// "key1": *value1*

function stylingObject(obj) {
  for(let key in obj) {
    console.log(`"${key}": *${obj[key]}*`);
  }
}