// || ("або")
// бінарний оператор, повертає Boolean
// Повертає true (істину), якщо хоча б один з операндів є істинним

// Задача: якщо вихідні або свято - то це чудовий день для відпочинку.
// Зробити висновок.

const isWeekend = true;
const isHoliday = false;

if(isWeekend || isHoliday) { // isWeekend === true || isHoliday === true
    console.log('Чудовий день для відпочинку');
} else {
    console.log('Треба працювати');
}