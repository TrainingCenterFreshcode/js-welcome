// Логічні оператори

// Працювати ці оператори будуть з логічним типом даних (Boolean)

const a = true;
// !   - заперечення
!a; // false

// !!  - подвійне заперечення
!!a;

//console.log(Boolean(1)); // явне приведення до типу Boolean

// Порівняння чисел

const result1 = 4 > 5; // false
const result2 = 7 < 9; // true

// Порівняння рядків
const result3 = 'a' > 'A'; // 61 > 41 -> true
const result4 = 'b' < 'u'; // 62 < 75 -> true

const result5 = 'test' > 'word'; // 74 > 77 -> false
const result6 = 'test' > 'tord'; // 65 > 6F

// Перевірка рівності чисел

// "==" - приводить операнди до одного типу даних і потім порівнює. НЕ РЕКОМЕНДУЄТЬСЯ
const result7 = 5 == 6; // false
const result8 = 6 == 6; // true
const result9 = '9' == 9; // true

// "===" порівнює оператори і за значенням і за типом даних. РЕКОМЕНДУЄТЬСЯ
const result10 = '9' === 9; // false
const result11 = 9 === 9; // true

// Більше-або-дорівнює або менше-або-дорівнює
const result12 = 3 >= 3; // true
const result13 = 6 <= 7; // true

console.log(result13);