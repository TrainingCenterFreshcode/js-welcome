/* Map (Карта, Мапа, Словник)

Зберігає пари "ключ: значення"
Має розмір (size)

Відмінності від звичайного об'єкта:
1. Запам'ятовує елементи в тому ж порядку, в якому ми їх додаємо
2. Ключем може бути будь-який тип даних: String, Number, Boolean, BigInt, Object -> Function
(Об'єкти (в тому числі функції) - передаються за посиланнями



Ключ в Map має бути унікальним


*/



const vocalbuary = new Map();

vocalbuary.set('cat', 'кіт');
vocalbuary.set('dog', 'собака');
vocalbuary.set('eat', 'їсти');

// Написати функцію, яка приймає строку англійською мовою і перекладає цю строку українською, використовуючи словник

function translater(str, vocalbuary) {
  const arrayWords = str.toLowerCase().trim().split(' ');
  
  // у нас є словник vocalbuary
  // перебрати arrayWords і переклад для кожного англійського слова у масиві дістати з нашого словника
  const translatedArray = arrayWords.map((word) => {
    if(vocalbuary.has(word)) {
      return vocalbuary.get(word);
    } else {
      return word;
    }
  });

  return translatedArray.join(' ');
}

console.log(translater('    Cat eat dog    ', vocalbuary));