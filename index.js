/*

Задача 3

Створити новий масив користувачів, об'єкти мають бути у такому вигляді
{
  fullname: 'John Doe',
  email: ....
}

*/

const users = [{
  name: 'John',
  lastName: 'Doe',
  age: 19,
  email: 'john.doe@gmail.com'
}, {
  name: 'Jane',
  lastName: 'Doe',
  age: 22,
  email: 'jane.doe@gmail.com'
}, {
  name: 'Jackson',
  lastName: 'Doe',
  age: 55,
  email: 'jackson.doe@gmail.com'
}]

// function newUserObject(user) {
//   return {
//     fullName: `${user.name} ${user.lastName}`,
//     email: user.email,
//     age: user.age + 1
//   }
// }

// const newUsers = users.map(newUserObject);



const newArrFromUsers = users.map((user) => {
  const newUser = { 
    fullName: `${user.name} ${user.lastName}`,
    email: user.email
  };
  return newUser;
});