// Мутація - зміна
// Мутабельне - те, що можна змінити
// Іммутабельне - те, що не може бути змінено

const user = { // об'єкти - мутабельні
    name: 'John',
    lastName: 'Doe'
}

user.isHungry = false;

// Примітивні типи (String, Number, Boolean, Null, Undefined, Symbol, Bigint) - іммутабельні

const username = 'John Doe';
username.isHungry = false;