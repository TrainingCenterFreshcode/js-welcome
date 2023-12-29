// Loops - Цикли

/*
while - цикл з передумовою

while (умова) {
  тут буде блок коду, який буде циклічно виконуватись
}

do-while - цикл з післяумовою

do {
  тут буде блок коду, який буде циклічно виконуватись
} while (умова)

*/

const correctPassword = 'qwerty1234';
let userPass; // пароль з промпту

do {
  userPass = prompt('Введіть свій пароль');
} while(userPass !== correctPassword)
// до тих пір поки