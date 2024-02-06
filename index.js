const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm // 1'
        },
        width: {
            value: 50,
            scale: 'cm // 2'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Ggrc'
    },
    color: 'black',
    resolution: '4K'
}




/*

Існує 3 види деструктуризації у JS:
+ 1. Деструктуризація об'єктів
+ 2. Деструктуризація вхідних параметрів
+ 3. Деструктуризація масивів

*/



function getFullName({firstName, lastName, ...restObject}) { // все інше окрім firstName, lastName ігнорується
    console.log(restObject);
    return `${firstName} ${lastName}`;
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    geolocation: '42.2213123 56.11214545',
    browser: 'Chrome'
}

console.log(getFullName(user2));










const arr = [1, 2, 3, 4, 5, 6];
// const firstElement = arr[0];

const [firstElement, secondElement, ...restOfArr] = arr;






















const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: [
        {email: 'john@gmail.com'},
        {phones: ['+380994875717', '+380994875236', '+38096589631']}
    ]
}

// const {contacts: {phones}} = user;

// const [firstJohnNumber, secondJohnNumber, thirdJohnNumber] = phones;

// const {contacts: {phones: [firstJohnNumber, secondJohnNumber, thirdJohnNumber]}} = user;





const {contacts: [emailObject, phonesArray]} = user;

const { email } = emailObject;
const {phones: [firstJohnNumber, secondJohnNumber, thirdJohnNumber]} = phonesArray;

// console.log(email);
// console.log(firstJohnNumber);
// console.log(secondJohnNumber);
// console.log(thirdJohnNumber);