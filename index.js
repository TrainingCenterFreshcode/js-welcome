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




// У нас є об'єкт юзера

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: {
        email: 'john@gmail.com',
        phone: '+380994875717'
    }
}

// Задача: з використанням деструктуризації отримати значення name, city, email та phone

const {name, address: {city}, contacts: {email, phone}} = user;
console.log(name);
console.log(city);
console.log(email);
console.log(phone);