'use strict';

const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const btnPlus = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const range = document.querySelector('.rollback input[type="range"]');
const spanValue = document.querySelector('.rollback span.range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   rollback: 0,
   adaptive: true,
   fullPrice: 0,
   servicePricesPercent: 0,
   servicePricesNumber: 0,
   allServicePrices: 0,
   servicesPercent: {},
   servicesNumber: {},


   init: function () {
      appData.addTitle();
      startBtn.addEventListener('click', appData.start);
      btnPlus.addEventListener('click', appData.addScreenBlock);
      appData.rangeRollback();
   },
   addTitle: function () {
      document.title = title.textContent;
   },
   start: function () {
      appData.addScreens();
      appData.addServices();
      appData.addPrices();
      appData.addRollback();

      appData.logger();
      console.log(appData);
      appData.showResult();
   },
   rangeRollback: function () { //2) задание 2 

      const logger = function (event) {
         spanValue.textContent = event.target.value;
      };

      range.addEventListener('input', logger);
      range.addEventListener('change', logger);

   },
   addRollback: function () {
      appData.rollback = +spanValue.textContent; // продолжение задания2 - это значение теперь заноситься в свойство rollback

      console.log(appData.rollback);
   },
   showResult: function () {
      total.value = appData.screenPrice; // стоимость верстки
      totalCount.value = +appData.screens; // задание 4 количество экранов
      totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent; //стоимость доп услуг
      fullTotalCount.value = appData.fullPrice; //итоговая стоимость
      totalCountRollback.value = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); // стоимость с учетом отката


      console.log(totalCountRollback.value);
      if (range.value == 0) {
         totalCountRollback.value = fullTotalCount.value; // приравниваю значение итоговой стоимость к стоимостьи с учетом отказа если отката нет
      } else {}

   },
   addScreens: function () {
      screens = document.querySelectorAll('.screen');

      screens.forEach(function (screen, index) {
         const select = screen.querySelector('select');
         const selectInput = screen.querySelector('input');
         const selectName = select.options[select.selectedIndex].textContent;

         //1)задание 1 (заблокировать кнопку)

         if (!selectInput.value || selectName === 'Тип экранов') {

            appData.startBtn.disabled = true;
            console.log('кнопка не работает');

         } else {
            console.log('работает');
            startBtn.disabled = false;
         }

         appData.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +selectInput.value,
            count: +selectInput.value //количество экранов из input (задание 4)
         });
      });
      console.log(appData.screens);
   },

   addServices: function () {
      otherItemsNumber.forEach(function (item) {
         const check = item.querySelector('input[type=checkbox]');
         const label = item.querySelector('label');
         const input = item.querySelector('input[type=text]');

         if (check.checked) {
            appData.servicesNumber[label.textContent] = +input.value;
         }

      });

      otherItemsPercent.forEach(function (item) {
         const check = item.querySelector('input[type=checkbox]');
         const label = item.querySelector('label');
         const input = item.querySelector('input[type=text]');

         if (check.checked) {
            appData.servicesPercent[label.textContent] = +input.value;
         }
      });

   },
   addScreenBlock: function () {
      const cloneScreen = screens[0].cloneNode(true);

      screens[screens.length - 1].after(cloneScreen);
   },

   asking: function () {

      for (let i = 0; i < 2; i++) {
         let name;
         let price = 0;

         do {
            name = [i] + ' ' + prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка'); // добавление индефикатора к объекту
         } while (appData.isNumber(name));

         do {
            price = +prompt('Сколько это будет стоить?', 2000);
         } while (!appData.isNumber(price));

         appData.services[name] = +price;
      }
   },

   addPrices: function () {
      // for (let screen of appData.screens) {
      //    appData.screenPrice += +screen.price;
      // }

      appData.screenPrice = appData.screens.reduce(function (sum, item) { //  метод reduce
         return sum + item.price;
      }, 0);

      for (let key in appData.servicesNumber) {
         appData.servicePricesNumber += appData.servicesNumber[key];
      }

      for (let key in appData.servicesPercent) {
         appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
      }

      appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

      // задание 3 - метод getServicePercentPrice

      appData.servicesPercent = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));


      //задание 4 - общее количество экранов

      appData.screens = appData.screens.reduce(function (sum, item) {
         return sum + item.count;
      }, 0);

   },

   logger: function () {
      console.log(appData.fullPrice);
      console.log(appData.screens);
      console.log(appData.screenPrice);
   }
};

appData.init();