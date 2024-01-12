const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 19,
    email: "john.doe@gmail.com",
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 22,
    email: "jane.doe@gmail.com",
  },
  {
    name: "Jackson",
    lastName: "Doe",
    age: 55,
    email: "jackson.doe@gmail.com",
  },
];

// Задача 1
// збільшити вік користувачів на 1


// variant 1
function plusOneYear (item) {
  item.age += 1;
}
users.forEach(plusOneYear);

// variant 2
// users.forEach((item) => item.age += 1);

console.log(users);
