// 1 ex.
let password = 'qwerty!';

let usersPassword = String(prompt('Введите пароль'));

(password === usersPassword) ? alert("Пароль введен верно") : alert("Пароль введен неправильно");

// 2 ex.
let c = Number(prompt('Введите число'));

(c >= 0 && c <= 10) ? console.log('Верно') : console.log('Неверно');

// 3 ex.
let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите число'));

(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// 4 ex.
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

// 5 ex.
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 12:
        console.log('Сезон "Зима"');
        break;
    case 1:
        console.log('Сезон "Зима"');
        break;
    case 2:
        console.log('Сезон "Зима"');
        break;
    case 3:
        console.log('Сезон "Весна"');
        break;
    case 4:
        console.log('Сезон "Весна"');
        break;
    case 5:
        console.log('Сезон "Весна"');
        break;
    case 6:
        console.log('Сезон "Лето"');
        break;
    case 7:
        console.log('Сезон "Лето"');
        break;
    case 8:
        console.log('Сезон "Лето"');
        break;
    case 9:
        console.log('Сезон "Осень"');
        break;
    case 10:
        console.log('Сезон "Осень"');
        break;
    case 11:
        console.log('Сезон "Осень"');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}


