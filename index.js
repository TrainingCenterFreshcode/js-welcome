/*

Детермінована функція - 
функція, при одних і тих же аргументах у виклику повертає ЗАВЖДИ один і той самий результат

*/

let superImportantVariable = 50;

function sum(a, b) { // детермінована функція
    superImportantVariable = 20; // ця дія не має відношення до призначення функції - побічний ефект
    console.log('Як справи??)'); // ця дія не має відношення до призначення функції - побічний ефект
    return a + b;
}

// console.log(sum(2, 2));
// console.log(sum(2, 2));
// console.log(sum(2, 2));
// console.log(sum(2, 2));

let variable = 5;

function addToNumberSomeVariable(number) { // НЕДЕТЕРМІНОВАНА ФУНКЦІЯ
    return number + variable;
}

console.log(addToNumberSomeVariable(5)); // 10
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));
console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable(5)); // 25

// Якщо функція працює тільки з тими даними, які в неї приходять - детермінована
// Якщо функція "вилазить в світ", то в такому випадку, вона може не завжди повертати один і той самий результат при одних і тих самих вхідних параметрах - недетермінована


/*


Побічні ефекти - зміни, які відбуваються під час виконання дії і мають вплив на оточуюче середовище
Побічні ефекти - зміни, які відбуваються разом з основною дією і мають вплив на оточуюче середовище

Недетерміновані функції з побічними ефектами - функції з побічними ефектами

console.log() - розповсюджений побічний ефект
alert() - розповсюджений побічний ефект
fetch() - запити на сервер або будь-які міжмережеві запити

*/

/*

Чисті функції (Pure Function)
1. Детермінована функція
2. Не має побічних ефектів

*/