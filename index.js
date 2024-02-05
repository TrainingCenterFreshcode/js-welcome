/* Задача 1

Дано масив: [2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13];
Повернути масив без повторень


*/

// variant 1

const set = new Set([2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13]);

const arrFromSet = [...set.values()];


// variant 2

const arrWithoutDoubles = [...new Set([2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13])];