function saySomething(howToSay, whatToSay) {
    howToSay(whatToSay);
}

//saySomething(alert, 'Hello user');
//saySomething(console.log, 'hiiiii!');

// Як називаються функції, які приймать інші функції у якості аргумента?
// HOF - High Order Function

// Як називається функція, яку ми передали як аргумент?
// callback - функція зворотнього виклику


// array.forEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для кожного елемента
// array.forEach(callback)

// Задача: у нас є масив чисел.
// Кожне значення цього масиву возвести в квадрат.

const array = [1, 2, 3, 4, 5];



array.forEach((item) => {
    console.log(item * item);
});


// array.map - працює як forEach, тільки map буде повертати новий масив

const newArray = array.map((item) => {
    return item * item;
});

// Коли ми використовуємо map, в такому випадку, значення, яке ви повертаєте (return) з колбеку - воно і буде входити у результуючий масив