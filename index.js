/*
Створіть функцію-конструктор собаки, в якого має бути ім'я, колір, вік

Зробіть декілька собак
*/

function Dog(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.gav = function() {
    return this.name + ' gav-gav-gav';
  }
}

const dog1 = new Dog('Tuzik', 'black', 1);

const dog2 = new Dog('Knopa', 'white', 3);

const dog3 = new Dog('Liem', 'black', 3);