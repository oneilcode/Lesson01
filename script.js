const title = 'Урок номер 2';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 11;
const rollback = 50;
const fullPrice = 100;
const adaptive = true;


console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);

console.log("Стоимость верстки экранов " +
   screenPrice + " рублей " + "и стоимость разработки сайта " + fullPrice + " рублей");

// const newScreens = screens.toLowerCase();
console.log(screens.toLowerCase().split(', '));

console.log(fullPrice * rollback / 100);