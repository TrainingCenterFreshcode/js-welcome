/*

Об'явлена функція - Function Declaration

function ім'я_функції(argument1, argument2) {
    тіло функції
}

ім'я_функції(аргумент1, аргумент2);


hoisting - оголошення функції піднімається (hoisted) до верхньої частини коду
*/

greetingUser('James');

function greetingUser(userName) {
    console.log('Hi, ' + userName);
}

greetingUser('Alex');

/*

Function Expression - Функціональний вираз

const ім'я_функції = function(arg1, arg2) {
    тіло функції
}

ім'я_функції(аргумент1, аргумент2);

hoisting не відбувається!

*/

// greet('Test'); Призведе до помилки!

const greet = function(userName) {
    console.log('Hi, ' + userName);
}

greet('Kevin');


/* 

Arrow Function - Стрілкова (Стрелочная) функція

const ім'я_функції = (arg1, arg2) => {
    тіло функції
}

ім'я_функції(аргумент1, аргумент2);

hoisting не відбувається!

*/

// greetArrow('Test'); Призведе до помилки!

const greetArrow = (userName) => {
    console.log('Hi, ' + userName);
}

greetArrow('Stepan');

// Задача: написати функцію, яка виводить системну дату та час (поточні)




// ДЛЯ ТИХ, ХТО ХОЧЕ БІЛЬШЕ!
const getDateWithTime = function() {
    // круглі дужки - коли нам не потрібні параметри
    // параметри нам не потрібні, коли робота функції не залежить від якогось зовнішнього значення
    const dateWithTime = new Date();
    return dateWithTime;
}