// Ex 1 +
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Ex 2 +
const splitedWords = (words, search) => {
    words.forEach((word) => {
        if (word.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))
        console.log(word);
    });
}
splitedWords(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

// Ex 3 +
const num = () => {
    let arr = 32.58884;
    console.log(Math.ceil(arr));
    console.log(Math.floor(arr));
    console.log(Math.round(arr));
}
num();

// Ex 4 +
const arr = [52, 53, 49, 77, 21, 32];

Math.min.apply(null, arr); 

Math.max.apply(null, arr);

console.log(Math.min(...arr));
console.log(Math.max(...arr));

// Ex 5 +
const getRandom = (minValue, maxValue) => {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandom(1, 10));

// Ex 6 +
const randomNumbers = (numb) => {
    let arr = [];
    for (let i = 0; i < Math.floor(numb / 2); i++) {
        arr.push(Math.round(Math.random() * numb))
    }
    console.log(arr);
}
console.log(randomNumbers(6));

// Ex 7 +
const random1 = (a, b) => {
    return Math.round(Math.random() * (b - a)) + a;
}
console.log(random1(4, 8));

// Ex 8 +
let myDate = new Date("4 August 2023");
console.log(myDate);

// Ex 9 +
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Ex 10 +
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dateInRussian = (ruDate) => {

    let date = ruDate.getDate();
    let month = months[ruDate.getMonth()];
    let year = ruDate.getFullYear();
    let day = days[ruDate.getDay()];
    let hour = ruDate.getHours();
    let minute = ruDate.getMinutes();
    let second = ruDate.getSeconds();

    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    console.log(`Дата: ${date} ${month} ${year} - это ${day}.`);
    console.log(`Время: ${hour}:${minute}:${second}`);
}
dateInRussian(ruDate = new Date());