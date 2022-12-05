'use strict';

let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

console.log('Привет, я Вика');

alert('Привет, нажми ок!');

//домашняя работа номер 3

//задание 3

title = prompt('Как называется ваш проект?');
console.log(title);

//задание 4

screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);

//задание 5

screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');

if (screenPrice >= 0) {
   console.log(screenPrice);
} else {
   alert('Неверные данные, введите только число')
   screenPrice = +prompt('Сколько будет стоить данная работа, введите число', '12000');
}

//задание 6

adaptive = confirm('Нужен ли адаптив на сайте');
console.log(adaptive);

//задание 7

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
console.log(servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Дизайн, верстка');
console.log(service2);

let servicePrice2 = +prompt('Сколько это будет стоить?', '5000');
console.log(servicePrice2);


//задание 8

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);


//задание 9

let servicePersentAgent = Math.ceil(fullPrice / 100 * 20); //округление в большую сторону
let servicePercentPrice = fullPrice - servicePersentAgent;

console.log(servicePercentPrice);

//задание 10

if (fullPrice >= 30000) {
   console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
   console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
   console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
   console.log('Что-то пошло не так');
}