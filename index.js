// Замикання дозволяє функціям зберігати доступ до змінних, навіть коли ці функції завершують своє виконання
// Замикання - здатність функції запам'ятовувати локальну область видимості

let value = 10; // глобальна область видимості


function wrapper() {
    let value = 20; // локальна область видимості

    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}







//////////////


// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

function makeCounter() {
    let i = 0;
    return function() {
        return i++; // i - змінна у замиканні
    }
}


//////


function makeCounterVersion2() {
    // Якщо буде бажання - спробуйте зробити методи, які будуть збільшувати/зменшувати counter на певну кількість одиниць
    let counter = 0;

    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounterVersion2();
