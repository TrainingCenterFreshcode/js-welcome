function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  this.push = function () {
    for(let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  },
  this.pop = function() {
    if(this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  },
  this.forEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}

MyArray.prototype = new MyArrayPrototype(); // прототипне посилання

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5);

// Відконсольлогувати квадрати кожного числа в масиві arr

// arr.forEach((item) => {
//   console.log(item ** 2);
// });

// Яка різниця між __proto__ та .prototype ?

// __proto__ працює тільки тоді, коли ми літерально створили об'єкт
{
  //
}

// .prototype - коли об'єкти створються за допомогою конструктора


/* Задача 1

Задача: створити функцію-конструктор для сходів. (ladder)
Об'єкт має властивість:
currentStair - сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:   <<<--- .prototype
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось
*/

function Ladder() {
  this.currentStair = 0;
}

function LadderPrototype() {
  this.up = function() {
    this.currentStair++;
    return this;
  }

  this.down = function() {
    this.currentStair--;
    return this;
  }

  this.showStair = function() {
    return this.currentStair;
  }
}

Ladder.prototype = new LadderPrototype();

const ladder = new Ladder();
                    //1  //2  //3   //2    
console.log(ladder.up().up().up().down().showStair());

/* Задача 2 

Перепишіть методи таким чином, щоб можливо було використання чейнінгу, тобто щоб можна було об'єднати виклик методів у ланцюжок

const ladder = new Ladder();

ladder.up().up().down().up().showStair();


*/