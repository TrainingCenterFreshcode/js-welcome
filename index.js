new Map(); // <-- [[key1, value1], [key2, value2], [key3, value3]];

// Map.prototype.entries - метод, який повертає ітератор. Ітератор повертає пари ключ-значення для кожного елемента

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);

const entriesIterator = map1.entries();

entriesIterator.next().value; // ['key1', 'value1']
entriesIterator.next().value; // ['key2', 'value2']
entriesIterator.next().value; // value: undefined, done: true


// Map.prototype.keys - метод, який повертає ітератор з усіма ключами з об'єкта Map

const keysIterator = map1.keys();

keysIterator.next().value; // 'key1'
keysIterator.next().value; // 'key2'
keysIterator.next().value; // undefined, done: true

// Map.prototype.values - метод, який повертає ітератор з усіма значеннями ключей з об'єкта Map

const valuesIterator = map1.values();

valuesIterator.next().value; // 'value1'
valuesIterator.next().value; // 'value2'
valuesIterator.next().value; // undefined, done: true



// Map.prototype.forEach - використовується для ітерації (перебору) всіх елементів у Map і виклику певної функції (callback) для кожного елементу

// Задача: вивести на консоль мапу

map1.forEach((value, key, map) => {
  console.log(`${key} - ${value}`);
});



// Map.prototype.delete - використовується для видалення пари ключ-значення з об'єкта Map відповідно до якогось ключа
//map1.delete('key1');

console.log(map1.has('key1')); // false
console.log(map1.get('key1')); // undefined


// Map.prototype.clear - використовується для повного очищення об'єкта Map, видаляючи всі пари ключ: значення, які знаходяться там
//map1.clear();

console.log(map1.size); // 0



// Задача: вивести на консоль мапу

console.log(...map1);
console.log(...map1.keys());
console.log(...map1.values());