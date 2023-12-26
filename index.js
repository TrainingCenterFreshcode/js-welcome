const num1 = Number(prompt('Введіть перше число: '));
const num2 = Number(prompt('Введіть друге число: '));

// Задача: Написати функцію, яка приймає 2 числа і додає їх

function addTwoNumbers(arg1, arg2) {
    console.log(num2);
    return arg1 + arg2;
}

const result = addTwoNumbers(num1, num2);
console.log(result);

// Область видимості - визначення доступності і видимості змінних та функцій у певних частинах коду

/* 
У JS існує 2 основні області видимості:

1. Глобальна область видимості - глобальна область видимості охоплює весь документ (программу)
*/

const globalVariable = 10;

function globalFunction() {
    // тіло функції...
}

console.log(globalVariable); // 10

// 2. Локальна область видимості - визначається блоками коду (фігурними дужками)

function testFunction() {
    const localVariable = 20; // Локальна змінна testFunction

    if(true) {
        const innerVariable = 30; // Локальна змінна if
        console.log(innerVariable); // 30
        console.log(localVariable); // 20 , localVariable - знаходиться у глобальній області видимості по відношенню до if
        console.log(globalVariable); // 10 , globalVariable - знаходиться у глобальній області видимості по відношенню до if
    }

    console.log(localVariable); // 20
    // console.log(innerVariable); => Помилка: innerVariable недоступна тут
}

testFunction();

// console.log(localVariable); => Помилка: localVariable недоступна тут

// 3. Функціональна область видимості - визначає область видимості, за якої всі змінні доступні всередині функцій, незалежно від блоків, яких вони оголошені
// (var)


// Summary
/*
Scope - область видимості
(це всі наші змінні, об'єкти ітд, які нам доступні)

Local Scope (локальна область видимості) - це всі наші змінні, об'єкти ітд ВСЕРЕДИНІ нашої функції

Global Scope (глобальна область видимості) - це всі наші змінні, об'єкти ітд з поточного коду

*/