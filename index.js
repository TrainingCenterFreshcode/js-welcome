// console.log();
// alert('Hello');

let firstOperand = Number(prompt('Введіть перше число: ')); // '5' --> Number('5') --> 5:number
let secondOperand = Number(prompt('Введіть друге число: ')); // '10' --> Number('10') --> 10:number
let result = firstOperand + secondOperand;

if(Number.isNaN(result)) { // Number.isNaN(result) === true
    console.log('Ти не правий, введи число');
} else {
    console.log(result);
}