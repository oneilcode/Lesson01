'use strict';

let title;
let screens;
let screenPrice;
let rollback = 11;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
   return !isNaN(parseFloat(num)) && isFinite(num); //универсальная функция для проверки
};

const asking = function () {
   title = prompt('Как называется ваш проект?', 'Проект');
   screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
   screenPrice = prompt('Сколько будет стоить данная работа?', '10000');

   do {
      screenPrice = prompt('Сколько будет стоить данная работа?', '10000'); //задание 1 ДЗ номер 5 
   }
   while (!isNumber(screenPrice));

   adaptive = confirm('Нужен ли адаптив на сайте');
};

const getAllServicePrices = function () {
   let sum = 0;

   for (let i = 0; i < 2; i++) {

      if (i === 0) {
         service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
      } else if (i === 1) {
         service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
      }
      sum += prompt('Сколько это будет стоить?', '5000');
      while (!isNumber(sum)) {

         sum = prompt('Сколько это будет стоить?', '5000'); //задание 2 ДЗ номер 5 
      }
   }

   return sum;

};

const showTypeOf = function (variable) {
   console.log(variable, typeof variable);
};

function getFullPrice() {
   return screenPrice + allServicePrices;
}

const getTitle = function () {
   if (!title) return title;
   return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));

console.log(screens.length);
console.log(servicePercentPrice);

console.log(getServicePercentPrices());