let title = 'Урок номер 2';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 11;
let rollback = 50;
let fullPrice = 100;
let adaptive = true;


console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);

console.log("Стоимость верстки экранов " +
   screenPrice + " рублей " + "и стоимость разработки сайта " + fullPrice + " рублей");

let newScreens = screens.toLowerCase();
console.log(newScreens.split(', '));

console.log(fullPrice * rollback / 100);