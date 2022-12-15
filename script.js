'use strict';

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   rollback: 11,
   adaptive: true,
   fullPrice: 0,
   servicePercentPrice: 0,
   allServicePrices: 0,
   services: {},
   start: function () {
      appData.asking();
      appData.addPrices();
      appData.getFullPrice();
      appData.getServicePercentPrices();
      appData.getTitle();

      appData.logger();
   },

   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num); //универсальная функция для проверки
   },

   getFullPrice: function () {
      appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
   },

   getServicePercentPrices: function () {
      appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
   },

   asking: function () {

      do {
         appData.title = prompt('Как называется ваш проект?', 'Проект'); //проверка на только буквы или буквы и числа в строке
      } while (appData.isNumber(appData.title));

      for (let i = 0; i < 2; i++) {
         let name;
         let price = 0;

         do {
            name = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные'); //проверка на только буквы или буквы и числа в строке
         } while (appData.isNumber(name));

         console.log(typeof name);

         do {
            price = +prompt('Сколько будет стоить данная работа?', 5000);
         } while (!appData.isNumber(price));

         console.log(typeof price);

         appData.screens.push({
            id: i,
            name: name,
            price: price
         });
      }

      for (let i = 0; i < 2; i++) {
         let name;
         let price = 0;

         do {
            name = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка'); //проверка на только буквы или буквы и числа в строке
         } while (appData.isNumber(name));

         console.log(typeof name);

         do {
            price = +prompt('Сколько это будет стоить?', 2000);
         } while (!appData.isNumber(price));

         console.log(typeof price);

         appData.services[name] = +price;
      }

      appData.adaptive = confirm('Нужен ли адаптив на сайте');
   },

   addPrices: function () {
      for (let screen of appData.screens) {
         appData.screenPrice += +screen.price;
      }

      for (let key in appData.services) {
         appData.allServicePrices += appData.services[key];
      }
   },

   getTitle: function () {
      appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);

      console.log(typeof appData.title);

   }
};

appData.start();