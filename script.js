'use strict';

let title = prompt('Как называется ваш проект?');;
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');;
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let rollback = 11;
let adaptive = confirm('Нужен ли адаптив на сайте');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
let servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
let servicePrice2 = +prompt('Сколько это будет стоить?', '5000');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


const showTypeOf = function (variable) {
   console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
   if (price >= 30000) {
      return 'Даем скидку в 10%';
   } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%';
   } else if (price < 15000 && price >= 0) {
      return 'Скидка не предусмотрена';
   } else if (price < 0) {
      return 'Что-то пошло не так';
   }
};

//задание 1 (ДЗ номер 4)
const getAllServicePrices = function () {
   return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices;
getAllServicePrices();
console.log(getAllServicePrices(allServicePrices));

//задание 2 (ДЗ номер 4)
function getFullPrice(screenPrice, allServicePrices) {
   return screenPrice + allServicePrices;
}
fullPrice = getFullPrice;
getFullPrice();
fullPrice = console.log(getFullPrice(screenPrice + allServicePrices));


//задание 3 (ДЗ номер 4)

function getTitle(title) {
   if (!title) return title;
   return title[0].toUpperCase() + title.slice(1).toLowerCase();
}
getTitle();
console.log(getTitle(title));






showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));

console.log(screens.length);
console.log(servicePercentPrice);