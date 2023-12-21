// Перетворення (приведення) типу даних

// Перетворення типу даних - коли значення змінює тип даних з одного на інший
// Існує 2 типи перетворення даних: явне і неявне

// Неявне перетворення типів (implicit type conversion)
let num = 6 - '1';
//console.log(num);

// Явне перетворення типів (explicit type conversion)
// (приведення типів)

let thisIsNumber = Number('45'); // 45

// Boolean автоматично (неявно) приводиться до типу Number при арифметичних розрахунках
// true -> 1
// false -> 0

let booleanNumber = true + 1; // 1 + 1 = 2
//console.log(booleanNumber);

// String

let thisIsString = String(45); // '45'
//console.log(thisIsString);

let testString = null + ''; // неявне приведення типу до string
//console.log(testString);

// Явне приведення типів краще за неявне

let test = 15 - Number('17');
//console.log(test);

// NaN - Not-a-Number
let notANumber = 2 * 'Hello'; // приведення типів неможливе -> некоректна математична операція -> NaN
//console.log(notANumber);

// () - оператор виклику функції
// математичні оператори (+, -, *, /)
// оператор конкатенації

// оператор typeof - довзоляє отримати тип даних операнда
let box = true;
console.log(typeof box);