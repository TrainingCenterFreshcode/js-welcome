const user = {
  'name': 'John', // Ключ - 'name', значення - 'John'
  'favorite color': 'red',
  0: 'value'
}

// Ключем в об'єкті може бути рядок або тип даних Symbol

// . - оператор доступу за ім'ям властивості (коли мова йде про валідні ідентифікатори)

console.log(user.name); // John
// user.'favorite color'; -->> syntax error
// user.0; -->> syntax error

// [] - оператор доступу до обчислювальної властивості (коли мова йде про невалідні ідентифікатори)
console.log(user['favorite color']); // red

console.log(user[0]); // value


const someObj = {
  2: 10
}

// Задача: отримати значення, яке знаходиться під ключем 2

console.log(someObj[2]);
console.log(someObj['2']);