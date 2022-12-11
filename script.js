'use strict';

const appData = {
   title: '',
   screens: '',
   screenPrice: 0,
   rollback: 11,
   adaptive: true,
   fullPrice: 0,
   servicePercentPrice: 0,
   allServicePrices: 0,
   service1: '',
   service2: '',
   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num); //универсальная функция для проверки
   },
   getFullPrice: function () {
      return appData.screenPrice + appData.allServicePrices;
   },
   getServicePercentPrices: function () {
      return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
   },
   start: function () {
      appData.title = prompt('Как называется ваш проект?', 'Проект');
      appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

      do {
         appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 5000);
      } while (!appData.isNumber(appData.screenPrice));

      appData.adaptive = confirm('Нужен ли адаптив на сайте');
   },
   getAllServicePrices: function () {
      let sum = 0;

      for (let i = 0; i < 2; i++) {
         let price = 0;

         if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
         } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
         }

         do {
            price = +prompt('Сколько это будет стоить?', 2000);
         } while (!appData.isNumber(price));

         sum += +price;
      }

      return sum;
   },
   getTitle: function () {

      return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
   },

   getRollbackMessage: function (price) {
      if (price >= 30000) {
         return 'Даем скидку в 10%';
      } else if (price >= 15000 && price < 30000) {
         return 'Даем скидку в 5%';
      } else if (price < 15000 && price >= 0) {
         return 'Скидка не предусмотрена';
      } else if (price < 0) {
         return 'Что-то пошло не так';
      }
   },
   logger: function () {

      console.log(appData.getAllServicePrices());
      console.log(appData.getFullPrice());
      console.log(appData.getTitle());
   }
};

appData.start();

appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.title = appData.getTitle();
appData.servicePercentPrice = appData.getServicePercentPrices();

console.log(appData.logger());
for (let key in appData) {
   console.log(key, appData[key]);
}