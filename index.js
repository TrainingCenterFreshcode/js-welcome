/* Задача 2 (за бажанням)

Зробити калькулятор =)

Користувач послідовно (один за одним) вводить
- Перше число
- Друге число
- Один з варіантів: +, -, *, /

Для кожної математичної дії (+, -, *, /) зробіть окрему функцію.
Весь калькулятор - це теж окрема функція, роль якої - спитати у користувача два числа і дію і повернути йому результат в якості alert.

P.S. Повна творча свобода.
Якщо ви бачите рішення цієї задачі якось по-іншому - Ви можете реалізувати своє бачення калькулятора.

*/

const operand1 = Number(prompt('Введіть перше число'));
const operand2 = Number(prompt('Введіть друге число'));
const action = prompt('Введіть потрібну дію: +, -, *, /');

function calculator(operand1, operand2, action) {
    let result; // тут буде лежати остаточний результат, після дій над операндами

    switch(action) {
        case '+': {
            result = sum(operand1, operand2);
            break;
        }
        case '-': {
            result = substract(operand1, operand2);
            break;
        }
        case '*': {
            result = multy(operand1, operand2);
            break;
        }
        case '/': {
            result = divide(operand1, operand2);
            break;
        }
        default: {
            result = 'Сталася помилка! Введіть правильну дію +, -, *, /';
        }
    }

    console.log(result);
}

calculator(operand1, operand2, action);

function sum(a, b) {
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