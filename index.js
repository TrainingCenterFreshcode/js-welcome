/*

Детермінована функція - 
функція, при одних і тих же аргументах у виклику повертає ЗАВЖДИ один і той самий результат

*/

function sum(a, b) { // детермінована функція
    return a + b;
}

// console.log(sum(2, 2));
// console.log(sum(2, 2));
// console.log(sum(2, 2));
// console.log(sum(2, 2));

let variable = 5;

function addToNumberSomeVariable(number) { // НЕДЕТЕРМІНОВАНА ФУНКЦІЯ
    return number + variable;
}

console.log(addToNumberSomeVariable(5)); // 10
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable(5)); // 25

// Якщо функція працює тільки з тими даними, які в неї приходять - детермінована
// Якщо функція "вилазить в світ", то в такому випадку, вона може не завжди повертати один і той самий результат при одних і тих самих вхідних параметрах - недетермінована