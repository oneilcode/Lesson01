'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 11;
let adaptive = confirm('Нужен ли адаптив на сайте');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
let servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
let servicePrice2 = +prompt('Сколько это будет стоить?', '5000');
let allServicePrices;
let fullPrice;
let servicePercentPrice;


const showTypeOf = function (variable) {
   console.log(variable, typeof variable);
};

//задание 1 (ДЗ номер 4)
const getAllServicePrices = function () {
   return servicePrice1 + servicePrice2;
};

//задание 2 (ДЗ номер 4) ДАННАЯ ФУНКЦИЯ ОШИБОЧНА НЕ ПОНИМАЮ ПОЧЕМУ
function getFullPrice() {
   return screenPrice + allServicePrices;
}

//задание 3 (ДЗ номер 4)

const getTitle = function () {
   if (!title) return title;
   return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

//задание 4 (ДЗ номер 4)

const getServicePercentPrices = function () {
   return fullPrice - (fullPrice * (rollback / 100));
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));

console.log(screens.length);
console.log(servicePercentPrice);

console.log(getServicePercentPrices());