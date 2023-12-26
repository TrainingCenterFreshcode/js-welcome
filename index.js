//const value1 = Number(prompt('Введіть перше число: '));
//const value2 = Number(prompt('Введіть друге число: '));

// Задача 1. Написати функцію, яка прицмає два числа і повертає те число, що більше


function getBigger(number1, number2) { // number1, number2 - формальні параметри
    if(typeof number1 !== 'number' || typeof number2 !== 'number') {
        console.log('Ми очікуємо числа!');
    } else if(number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(getBigger(value1, value2)); // value1, value2 - фактичні параметри



// Задача 2. Написати функцію, яка обчислює середнє арифметичне з двох чисел

/*
function average(number1, number2) {
    return (number1 + number2) / 2;
}

console.log(average(value1, value2));
*/

// Задача 3. Написати функцію, яка приймає число і визначає, чи є воно парним

/*
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));

*/