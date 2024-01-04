/*

Об'єкти

const назваОб'єкту = {
  ключ: значення
}

Об'єкти мають:
- властивості
- методи

*/

const obj = {
  color: 'white',
  fontSize: 2
}

// ООП - парадигма програмування, яка дозволяє створювати програми з використанням об'єктів, які мають властивості і методи

// Задача: опишіть об'єкт лампочки

const bulb = {
  lightness: 200,
  power: '200W',
  cap: 'small',
  on: function() {
    return 'The light on!';
  },
  off: function() {
    return 'The light off!';
  }
}

console.log(bulb.lightness);

console.log(bulb.on());

console.log(bulb.off());

const dog = {
  name: 'Tuzik',
  'favorite food': 'meat'
}

console.log(dog.name);
console.log(dog['favorite food']);