/*

Написати функцію, яка приймає рядок і робить кожну першу літеру кожного слова з великої літери

*/

function capitalizeWords(str) {
  // Розбиваємо рядок на окремі слова
  let words = str.split(' ');

  // Проходимо по кожному слову і робимо першу літеру великою
  for(let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Повертаємо з'єднаний рядок зі словами, розділеними пробілами
  return words.join(' ');
}

console.log(capitalizeWords('word flower third'));