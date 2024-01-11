// array.concat - використовується для об'єднання двох або більше масивів у новий масив (немутуючий)
// array.fill - використовується для заповнення всіх елементів масиву якимсь одним значенням (мутуючий)
// array.includes - використовується для перевірки наявності певного значення у масиві (немутуючий)
// array.indexOf - використовується для отримання першого входження певного значення у масиві (немутуючий)
// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву (немутуючий)
// array.push - використовується для додавання одного або кількох елементів у кінець (мутуючий)
// array.pop - використовується для видалення останнього елементу (мутуючий)
// array.shift - використовується для видалення першого елементу з початку масиву (мутуючий)
// array.unshift - використовується для додавання одного або декількох елементів на початок масиву (мутуючий)
// array.reverse - використовується для зміни порядку елементів у масиві на протилежний (мутуючий)

// array.slice - використовується для створення нового масиву, який складається тільки з якоїсь певної частини вихідного масиву (немутуючий)
// array.slice([start = 0], [end = array.length-1]);
// [start; end)

// Копіює масив з індекса M (включно) до індекса N (не включаючи)
// arr.slice(M, N);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = arr1.slice(2);


const users = [{ // 00XX652SS
    name: 'John',
    lastName: 'Doe'
}, { // 00XX652dd
    name: 'Jane',
    lastName: 'Doe'
}, { // // 00XX6621
    name: 'Jack',
    lastName: 'Dosh'
}]

const newUsers = users.slice(); // newUsers - поверхнева копія
const upUsers = newUsers.slice(); // upUsers - поверхнева копія з поверхневої копії



////////////////////

const newArr = [1, 2, 3, 4, 5, 6]; // link to ARRAY
const arrFromNewArr = newArr; // link to newArr (ORIGINAL ARRAY)
console.log(newArr === arrFromNewArr); // виведе true

const arrFromSlice = newArr.slice(); // new array; new address
console.log(newArr === arrFromSlice); // виведе false