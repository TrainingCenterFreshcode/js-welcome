/* Розробка програми для керування книжковим магазином

Предметна область: В книжковому магазині у нас буде багато книг. Ми їх продаємо

Всі наші книги по суті можна представити у вигляді об'єкта з однаковою.

done -->> Задача: створити конструктор об'єктів для представлення книг з наступними властивостями.
Назва книги, автор, рік видання, ціна.
Спректувати методи для отримання і встановлення значень цих властивостей.

done -->> Задача 2: Зробити для всіх книг метод, який би повернув ціну книги, але зі знижкою

*/

function Book(title, author, year, price) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.price = price;

  this.getTitle = function() {
    // реалізувати, наприклад, перевірку права на доступ до властивості
    return this.title;
  }

  this.getAuthor = function() {
    // реалізувати, наприклад, перевірку права на доступ до властивості
    return this.author;
  }

  this.getYear = function() {
    // реалізувати, наприклад, перевірку права на доступ до властивості
    return this.year;
  }

  this.getPrice = function() {
    // реалізувати, наприклад, перевірку права на доступ до властивості
    return this.price;
  }

  this.setTitle = function(newTitle) {
    // реалізувати, наприклад, якісь перевірки
    this.title = newTitle;
  }

  this.setAuthor = function(newAuthor) {
    // реалізувати, наприклад, якісь перевірки
    this.author = newAuthor;
  }

  this.setYear = function(newYear) {
    // реалізувати, наприклад, якісь перевірки
    this.year = newYear;
  }

  this.setPrice = function(newPrice) {
    // реалізувати, наприклад, якісь перевірки
    this.price = newPrice;
  }

  this.calculateDiscountedPrice = function(discountPercentage) {
    const discountedPrice = this.price - (this.price * (discountPercentage / 100));
    return discountedPrice;
  }
}

const book1 = new Book('Чотири вітри', 'Крістін Генна', 2020, 450);

// console.log(book1.getTitle());
// console.log(book1.getAuthor());
// console.log(book1.getYear());
// console.log(book1.getPrice());

// book1.setTitle('New Title');
// book1.setAuthor('New Author');
// book1.setYear(2025);
// book1.setPrice(350);

console.log(book1.calculateDiscountedPrice(10));