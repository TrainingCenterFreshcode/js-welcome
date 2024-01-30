/*

Фабричний метод - спосіб створювати об'єкти, який дозволяє нам не вказувати конкретний клас об'єкта.
Використовуємо спеціальну "фабрику" для створення об'єктів.
Фабрика знає, який саме об'єкт потрібно створити і повертає його нам.

new Student(); // НЕ РОБИМО!

Звертаємось до фабрики, фабриці повідомляємо, що нам потрібно, фабрика уже буде робити нам екземпляри потрібного класу (new Student())


*/

// Абстрактний клас або інтерфейс
class Animal {
    constructor(nickname) {
        this.nickname = nickname;
    }

    makeSound() { // абстрактний метод

    }
}

// Конкретний клас для собаки
class Dog extends Animal {
    constructor(nickname) {
        super(nickname);
    }

    makeSound() { // віртуальний метод
        console.log('Гав-гав');
    }
}

// Конкретний клас для кота
class Cat extends Animal {
    constructor(nickname) {
        super(nickname);
    }

    makeSound() { // Віртуальний метод
        console.log('Мяу-мяу');
    }
}

// Фабричний клас, який створює об'єкти
class AnimalFactory {
    static createAnimal(type, nickname) {
        switch(type) {
            case 'dog': return new Dog(nickname);
            case 'cat': return new Cat(nickname);
            default: throw new Error(`Невідомий тип тварини: ${type}`);
        }
    }
}


// Використання фабрики для створення об'єктів

// Створити об'єкт собаки
const dog = AnimalFactory.createAnimal('dog', 'Tuzik');
dog.makeSound(); // Гав-гав

// Створити об'єкт кота
const cat = AnimalFactory.createAnimal('cat', 'Murzik');
cat.makeSound(); // Мяу-мяу