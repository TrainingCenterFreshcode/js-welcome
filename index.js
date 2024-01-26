/*

Напишіть клас RangeValidator.

У класі має бути 2 властивості: from, to
from, to - числа, за типом даних.

Завдання: реалізувати сеттери та геттери для обох властивостей
Реалізувати такі обмеження: from не може бути більше ніж to

Реалізувати звичайний метод getRange, який має повертати масив цілих чисел з цього діапазону

const object1 = new RangeValidator(2, 5);
object1.getRange(); // [2, 3, 4, 5]

*/

class RangeValidator {
    constructor(from, to) {
        this.to = to;
        this.from = from;
    }

    set from(value) {
        if(typeof value !== 'number') {
            throw new TypeError('From must be a number');
        }
        if(value > this._to) {
            throw new RangeError('From must be a larger than to');
        }

        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if(typeof value !== 'number') {
            throw new TypeError('to must be a number');
        }

        this._to = value;
    }

    get to() {
        return this._to;
    }

    getRange() {
        const arr = [];

        for(let i = this.from; i <= this.to; i++) {
            arr.push(i);
        }

        return arr;
    }
}

const obj = new RangeValidator(1, 5);