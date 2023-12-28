function sum(a, b) {
    return a + b;
}

let superFunction = sum; // насправді, sum - це посилання на комірку в RAM

console.log(sum(2, 4)); // 0X000045

console.log(superFunction(5, 5)); // 0X000045