// Практика

// У нас є функція
function greetingUser(user) {
  user.age = 50;
  return `Hey ${user.name} ${user.surname}. You will be ${user.age + 1} next year`;
}

// та у нас є об'єкт
const user = {
  name: 'John',
  surname: 'Doe',
  age: 19
}

// Написати функцію greetingUser таким чином, щоб вона вітала користувача та вказала, скільки йому років має виповнитись у наступному році