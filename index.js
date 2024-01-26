class Animal {
    constructor(nickname, color) {
        this.nickname = nickname;
        this.color = color;
    }

    eat() {
        return `${this.nickname} is eating`;
    }
}

// class Dog extends Animal - клас Собаки розширює клас Тварини (наслідує цей клас)
class Dog extends Animal {
    constructor(nickname, color) {
        super(nickname, color);
    }

    gav() {
        return `${this.nickname} gav-gav-gav`;
    }
}

const dog = new Dog('Tuzik', 'grey');