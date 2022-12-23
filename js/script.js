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

console.log(screens);

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
      this.addTitle();
      startBtn.addEventListener('mousedown', this.mouseDown.bind(appData));
      btnPlus.addEventListener('click', this.addScreenBlock.bind(appData));
      this.rangeRollback();
      this.rangeFunc();
   },
   addTitle: function () {
      document.title = title.textContent;
   },
   start: function () {
      this.addScreens();
      this.addServices();
      this.addPrices();
      this.addRollback();
      this.logger();
      this.showResult();
      startBtn.removeEventListener('mousedown', this.mouseDown.bind(appData));
      startBtn.removeEventListener('mouseup', this.mouseUp.bind(appData));
      this.reset();
   },
   reset: function () {
      this.changeBtn();
      this.blockElements();
      this.resetBtn();
   },
   rangeRollback: function () {

      const logger = (event) => {
         spanValue.textContent = event.target.value;
      };

      range.addEventListener('input', logger);
      range.addEventListener('change', logger);

   },
   addRollback: function () {
      this.rollback = +spanValue.textContent;

      console.log(this.rollback);
   },
   rangeFunc: function () {
      range.addEventListener('input', (event) => {
         this.rollback = +event.target.value;
         spanValue.textContent = +event.target.value + '%';
      });
   },
   showResult: function () {
      total.value = this.screenPrice; // стоимость верстки
      totalCount.value = +this.screens; // задание 4 количество экранов
      totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent; //стоимость доп услуг
      fullTotalCount.value = this.fullPrice; //итоговая стоимость
      totalCountRollback.value = +this.fullPrice - (this.fullPrice * (this.rollback / 100)); // стоимость с учетом отката

      console.log(totalCountRollback.value);
      if (range.value == 0) {
         totalCountRollback.value = fullTotalCount.value; // приравниваю значение итоговой стоимость к стоимостьи с учетом отказа если отката нет
      } else {}

   },
   addScreens: function () {
      screens = document.querySelectorAll('.screen');

      screens.forEach((screen, index) => {
         const select = screen.querySelector('select');
         const selectInput = screen.querySelector('input');
         const selectName = select.options[select.selectedIndex].textContent;

         this.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +selectInput.value,
            count: +selectInput.value //количество экранов из input (задание 4)
         });
      });
      console.log(appData.screens);
   },
   mouseDown: function () {
      screens = document.querySelectorAll('.screen');
      let isFull = [];

      screens.forEach((screen) => {
         const select = screen.querySelector('select');
         const selectName = select.options[select.selectedIndex].textContent;
         const selectInput = +screen.querySelector('input').value;
         selectName === 'Тип экранов' || selectInput == 0 ? isFull.push(false) : isFull.push(true);
      });
      if (!isFull.includes(false)) {
         startBtn.addEventListener('mouseup', appData.mouseUp);
      }
   },
   mouseUp: function () {
      range.addEventListener('input', () => {
         totalCountRollback.value = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
      });
      appData.start();
   },


   // новые методы для ДЗ 14
   changeBtn: function () {

      startBtn.addEventListener('click', () => { //исчезает кнопка расчитать - появляется кнопка сброс (задание 3)
         startBtn.style.display = 'none';
         resetBtn.style.display = 'block';

      });
   },
   blockElements: function () {
      const inputs = document.querySelectorAll('input[type="text"]');
      const select = document.querySelector('select');
      const selectAll = document.querySelectorAll('select');

      startBtn.addEventListener('click', () => { //делаем все елементы неактивные
         select.setAttribute('disabled', 'true');

         inputs.forEach((input) => {
            input.setAttribute('disabled', 'true');

         });
         screens.forEach((screen) => {
            screen.setAttribute('disabled', 'true');
         });

         selectAll.forEach((select) => {
            select.setAttribute('disabled', 'true');
         });

      });
   },

   resetBtn: function () {

      const inputs = document.querySelectorAll('input[type="text"]');
      const select = document.querySelector('select');
      const selectAll = document.querySelectorAll('select');
      const screenInput = document.querySelectorAll('.screen input');
      const checkboxes = document.querySelectorAll('.custom-checkbox');
      const range = document.querySelector('.rollback input');
      const totalInput = document.querySelectorAll('.total-input');

      resetBtn.addEventListener('click', () => { //по клику на кнопку делаем инпуты и селект неактивные
         resetBtn.style.display = 'none';
         startBtn.style.display = 'block';

         select.removeAttribute('disabled');

         spanValue.textContent = 0 + '%';

         range.value = 0;

         inputs.forEach((input) => {
            input.removeAttribute('disabled');
         });

         totalInput.forEach((input) => {
            input.value = 0;
         });

         checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
         });

         screens.forEach((screen) => {
            screen.removeAttribute('disabled');
         });

         selectAll.forEach((select) => {
            select.removeAttribute('disabled');
            select.selectedIndex = 0;
         });
         screenInput.forEach((input) => {
            input.value = '';
         });

      });

   },
   addServices: function () {
      otherItemsNumber.forEach((item) => {
         const check = item.querySelector('input[type=checkbox]');
         const label = item.querySelector('label');
         const input = item.querySelector('input[type=text]');

         if (check.checked) {
            this.servicesNumber[label.textContent] = +input.value;
         }

      });

      otherItemsPercent.forEach((item) => {
         const check = item.querySelector('input[type=checkbox]');
         const label = item.querySelector('label');
         const input = item.querySelector('input[type=text]');

         if (check.checked) {
            this.servicesPercent[label.textContent] = +input.value;
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
         } while (this.isNumber(name));

         do {
            price = +prompt('Сколько это будет стоить?', 2000);
         } while (!this.isNumber(price));

         this.services[name] = +price;
      }
   },

   addPrices: function () {

      this.screenPrice = this.screens.reduce(function (sum, item) { //  метод reduce
         return sum + item.price;
      }, 0);

      for (let key in this.servicesNumber) {
         this.servicePricesNumber += this.servicesNumber[key];
      }

      for (let key in this.servicesPercent) {
         this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
      }

      this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

      // задание 3 - метод getServicePercentPrice

      this.servicesPercent = +this.fullPrice - (this.fullPrice * (this.rollback / 100));


      //задание 4 - общее количество экранов

      this.screens = this.screens.reduce(function (sum, item) {
         return sum + item.count;
      }, 0);

   },

   logger: function () {
      console.log(this.fullPrice);
      console.log(this.screens);
      console.log(this.screenPrice);
   }
};

appData.init();