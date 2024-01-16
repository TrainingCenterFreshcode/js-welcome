'use strict';
// strict mode

console.log(this); // => this вказує на глобальний об'єкт Window

// this у глобальній області видимості посилається на об'єкт Window

function test() { // Function Declaration
  console.log(this); // => this вказує на функцію
}

test();

// Function Expression
const test2 = function() {
  console.log(this); // => this вказує на функцію
}

test2();

console.log(this); // this вказує на глобальний об'єкт Window

// Весь код, оточений фігурними дужками - контекст виконання
/*
Strict mode запустив такий механізм, що у Function Declaration та Function Expression з'являється свій власний контекст виконання:
контекстом виконання функції стає сама функція, а не глобальний об'єкт window
*/

// Arrow Function
const test3 = () => {
  console.log(this); // this вказує на глобальний об'єкт Window
  // Стрілочна функція не має свого власного контексту виконання
}

test3();

const newspaper = {
  title: 'News news news...',
  articles: [{
    author: 'John Doe',
    date: '23-08-2023',
    text: 'lorem'
  }, {
    author: 'Richard Doe',
    date: '25-08-2023',
    text: 'lorem'
  }, {
    author: 'Sam Doe',
    date: '25-08-2023',
    text: 'lorem'
  }],
  showArticles: function() {
    this.articles.forEach((item, index) => {
      console.log(`${this.title} ${index} - ${item.author}`);
    })
  }
}

newspaper.showArticles();