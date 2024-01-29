// ООП

/* Загальні ідеї ООП

1. ООП збудоване навколо об'єктів.
2. Поділ потрібний для того, щоб можна було створювати, осблуговувати та перетворювати якісь частини програми, не впливаючи при цьому на інші.
3. Сенс об'єкта у тому, що він має якісь методи, тобто він вміє щось робити, при цьому, інші об'єкти вони не знають як він це робить
4. Об'єкт має поняття атрибуту і методу.
Атрибут - будь-які дані, які зберігаються всередині об'єкта.
Методи - будь-які дії, які можна здійснювати над об'єктом, атрибутами об'єкта.
Атрибути зазвичай виражаються змінними, а методи - функціями.
5. Об'єкти можна створювати за шаблоном - такі шаблони називають класами.

*/


// Геттери та сеттери - аксессори (від англ. access - доступ)


// Абстракція - коли ми зосереджуємося тільки на суттєвих для завдання деталях (коли описуємо об'єкт) і ігноруємо все інше.
// Чим менше характеристик у об'єкта, тим краще абстракція, але ключові характеристи не можна прибирати!

// Щоб працювати з абстракціями, використовують інтерфейси
// Інтерфейс - спосіб взаємодії з об'єктом, який визначає, які операції можна здійснити з цим об'єктом та які дані можна отримати або змінити

// Інкапсуляція - процесс об'єднання даних та методів в одному об'єкті і приховування деталей реалізації від користувача

// В чому різниця між інкапсуляцією і абстракцією?
// Інкапсуляція зосереджена на організації та приховуванні деталей реалізації об'єкта
// Абстракція спрощує складність системи шляхом виділення ключових аспектів та приховуванні незначних деталей

// Спадкування - здатність до копіювання, можливість описати новий клас на основі вже існуючого.


class Figure {
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    get sideQuantity() {
        return this._sideQuantity;
    }

    set sideQuantity(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side quantity can`t be less than 0');
        }

        this._sideQuantity = newValue;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    get a() {
        return this._a;
    }

    set a(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._a = newValue;
    }

    get b() {
        return this._b;
    }

    set b(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._b = newValue;
    }

    get angle() {
        return this._angle;
    }

    set angle(newValue) {
        if(newValue < 0) {
            throw new RangeError('Angle cannot be less than 0');
        }

        this._angle = newValue;
    }

    getArea() {
        return this.a * this.b * Math.sin(this.angle);
    }
}


class Square extends Figure {
    constructor(a) {
        super(4);
        this.a = a;
    }

    get a() {
        return this._a;
    }

    set a(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._a = newValue;
    }

    getArea() {
        return this.a * this.a; // this.a ** 2
    }
}

const square = new Square(4);