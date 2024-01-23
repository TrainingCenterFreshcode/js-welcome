function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

function UserPrototype() {
  this.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };
}

User.prototype = new UserPrototype();

// __proto__ - працює з об'єктами які створюються літерально
// .prototype - працює з конструкторами

const user1 = new User("John", "Doe", 56);
const user2 = new User("Jane", "Freeman", 44);
