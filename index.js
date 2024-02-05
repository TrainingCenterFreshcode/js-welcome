// Set - множина (множество) набір унікальних значень


const set = new Set();

// Set.prototype.add - додає новий елемент із заданним значенням у кінець об'єкта Set

set.add(1);
set.add(4);
set.add('hello');


// Set.protoype.has - перевіряє наявність елементу у множині

console.log(set.has(1)); // true
console.log(set.has(12)); // false


// Set.prototype.delete - видаляє елемент з множини

set.delete('hello');


// Set.prototype.values - використовується для отримання ітератора, який повертає нам всі значення з об'єкта Set

const valuesIterator = set.values();

valuesIterator.next().value; // 1
valuesIterator.next().value; // 4
valuesIterator.next().value; // undefined, done: true

const arrayFromSet = [...set.values()];