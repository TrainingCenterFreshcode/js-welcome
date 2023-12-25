// Функції (Functions)
// Функція (підпрограмма) - блок коду, який виконує певні дії при виклику.
// Функція може приймати аргументи - значення, які передаються у функцію. Функція може використовувати аргументи у своїй роботі.
// Функція може повертати значення (а може і не повертати)
// Функція - фрагмент програмного коду, до якого можна звернутись з іншого місця програми

/* Синтаксис функції

Як оголосити функцію?

function ім'я_функції(аргумент1, аргумент2) {
    тіло функції
}

*/

// Задача: написати функцію, яка буде приймати ім'я користувача:строка і буде вітатись із цим користувачем

function greetingUser(userName) {
    // userName - абстракція, на якій ми зав'язуємо логіку роботи функції
    // userName - формальний параметр
    console.log('Hi, ' + userName);
}

// Використання функції
// Параметри, які ви передаєте при виклику функції - фактичні параметри
greetingUser('Alex'); // 'Alex' - аргумент функції, фактичний параметр
greetingUser('John'); // 'John' - фактичний параметр
greetingUser('Sam'); // 'Sam' - фактичний параметр
greetingUser('Solar'); // 'Solar' - фактичний параметр