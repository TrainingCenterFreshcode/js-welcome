/*

Змінна
Variable
Переменная

*/

/*

Створення змінної

ключове-слово ім'я-змінної;

var - deprecated

let = CD-RW
const = CD-R

*/

let box;

//console.log(box); // undefined

// "=" - оператор присвоєння

box = 3.99995; // Присвоєння (Присваивание) (Assign)

//console.log(box); // 3.99995

// Можемо визначати значення змінної при її створенні
let box2 = 'hello world!';

//console.log(box2); // 'hello world!'

box2 = 236;

//console.log(box2); // 236

let isActive = true;
let isLogged = false;
let isRecording = false;
isRecording = true;

// Присвоєння значення з іншої змінної

let x = 10;
let y = x; // змінна y отримує значення змінної x (y = 10)
//console.log(y); // 10

let z = 10;
let u = z;

u = 15; // u - 15, z - 10

console.log(z); // 10
console.log(u); // 15

/*
Правила неймінгу змінних:

1. Використовуйте осмислені та описові імена змінних.
Наприклад:
userName, age, totalAmount

2. Використовуємо camelCase у JS.

3. Уникайте використання однобуквених або непояснюваних скорочень.
Напрклад:
x, y, zxc

4. Уникайте пробілів та спеціальних символів у назвах змінних.

5. Заборонено починати назву змінної з цифри.
// let 1box; // Це заборонено!

*/