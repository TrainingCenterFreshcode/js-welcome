/*

High Order Function (HOF, Функція вищого порядку) -
функція, яка приймає іншу функцію в якості аргумента

*/

function calculator(num1, num2, functionLink) { // HOF
    let result = functionLink(num1, num2);
    return result;
}
                        // num1     // num2     // functionLink
console.log(calculator(5,           10,          sum)); // sum - посилання на функцію

// Використовуючи калькулятор, піднесіть num1 у степінь num2
console.log(calculator(3, 2, function (a, b) { // callback
    return a**b;
}));

function sum(a, b) { // Function Declaration
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

/*

High Order Function (HOF, Функція вищого порядку) -
функція, яка приймає іншу функцію в якості аргумента

Callback - Колбек (функція зворотнього виклику), 
- функція, ЯКУ ми передали як аргумент при виклиці іншої функції

*/