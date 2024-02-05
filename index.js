

const user1 = {
  firstName: 'Alex',
  lastName: 'Doe',
  id: 1
}

const user2 = {
  firstName: 'John',
  lastName: 'Doe',
  id: 2
}

const johnMessages = ['hello', 'How are you?'];
const alexMessages = ['hi!', 'I`m fine'];

const messageMap = new Map();
messageMap.set(`${user1.firstName} ${user1.lastName}`, alexMessages);
messageMap.set(`${user2.firstName} ${user2.lastName}`, johnMessages);

/*

+ Задача: за допомогою Map зв'язати користувача з його повідомленнями, щоб по ID користувача, можна було знайти його повідомлення

P.S. Ви можете підглядати у коміт з вирішенням задачі про розклад занять:
https://github.com/TrainingCenterFreshcode/js-welcome/blob/244c766334f1a66215b46893896135bdbf501f72/index.js

*/