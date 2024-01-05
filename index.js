/*

Задача 2

Зробити функцію-конструктор Авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість
Спроектувати методи:
- метод прискорення (accelearte) - приймає в якості аргумента певне прискорення
Зауважте, що при прискоренні, поточна швидкісь не може бути більшою за максимальну швидкість
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення
Зауважте, що при сповільненні, поточна швидкість не може бути менше за 0
- метод зупинки (stop)

*/

function Auto(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function(accelValue) {
    this.speed = this.speed + accelValue;
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    return this.speed;
  }

  this.deaccelerate = function(deaccelValue) {
    this.speed = this.speed - deaccelValue;
    if(this.speed < 0) {
      this.speed = 0;
    }

    return this.speed;
  }

  this.stop = function() {
    this.speed = 0;
    return this.speed;
  }
}

const auto1 = new Auto('Audi', 300);