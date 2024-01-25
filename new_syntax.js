
const MIN_ZP = 7101;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS;

class Worker {
    constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coefficient) {
        this.name = name;
        this.lastName = lastName;
        this.rate = Number(rate.toFixed(2));
        this.days = days;
        this.coefficient = coefficient;
    }

    /*
        Сеттер - метод для встановлення значення
        Геттер - метод для отримання значення
    */

    set rate(newValue) { // назва сеттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
        if(newValue < 0) {
            throw new RangeError('Rate must be a positive number');
        }
        if(typeof newValue !== 'number') {
            throw new TypeError('Rate must be a number');
        }

        // АЛЕ, всередині сеттеру ми працюємо з приватним полем
        this._rate = newValue;
    }

    get rate() { // // назва геттеру - назва приватного поля БЕЗ знаку нижнього підкреслення
        // АЛЕ, всередині геттеру ми працюємо з приватним полем
        return this._rate;
    }

    set name(newValue) {
        if(typeof newValue !== 'string') {
            throw new TypeError('Name must be a string');
        }

        if(newValue === '') {
            throw new Error('Name must be a valid');
        }

        this._name = newValue;
    }

    get name() {
        return this._name;
    }

    set lastName(newValue) {
        if(typeof newValue !== 'string') {
            throw new TypeError('lastName must be a string');
        }

        if(newValue === '') {
            throw new Error('lastName must be a valid');
        }

        this._lastName = newValue;
    }

    get lastName() {
        return this._lastName;
    }

    set days(newValue) {
        if(newValue < 0 || newValue > 31) {
            throw new RangeError('Days must be in 0 to 31');
        }

        this._days = newValue;
    }

    get days() {
        return this._days;
    }

    set coefficient(newValue) {
        if(newValue < 0) {
            throw new RangeError('coefficient must be > 0');
        }

        this._coefficient = newValue;
    }

    get coefficient() {
        return this._coefficient;
    }

    getSalary() {
        if(this.coefficient) {
            return this.rate * this.days * this.coefficient;
        } else {
            return this.rate * this.days;
        }
    }
}

const worker1 = new Worker('John', 'Doe', 300, 21);
const worker2 = new Worker('Savanna', 'Loe');

console.log(worker1.rate); // getter
worker1.rate = 500;

/*

В середині класу геттери/сеттери працюють з приватними полями.
А при зверненні до класу ззовні ми працюємо з геттерами/сеттерами.

*/


/*

Розробити геттери та сеттери для полів days та coefficient
Передбачьте перевірки в сеттерах
Перевірьте роботу геттерів/сеттерів

*/