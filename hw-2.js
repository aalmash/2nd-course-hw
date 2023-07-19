// 1st exersize
let a = 10;
alert(a);
a = 20;
alert(a);

// 2nd exersize
const iPhone = '2009 -год выпуска первого iPhone';
alert(iPhone);

// 3rd ex.
const autor = 'Brendan Eich';
alert(autor);

// 4th ex.
let c = 10;
let b = 2;
alert(c + b);
alert(c - b);
alert(c * b);
alert(c / b);

// 5th ex.
let d = 5;
let result =(b**d);
alert(result);

// 6th ex.
let e = 9; //так как переменная а уже есть, назвала переменную е 
alert(e%b);

// 7th ex.
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
--num;
alert(num);

// 8th ex.
const age =prompt('Сколько вам лет?');
alert(age);

// 9th ex.
const user = {
    name: 'Ada',
    age: 18,
    isAdmin: false
}

// 9.1th ex.
user.cityOfResidence = 'Novosibirsk';

// 9.2th ex.
user.age = 20;

// 9.3th ex.
delete user.cityOfResidence;

// 9.4th ex.
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);
alert(user[info]);

// 10th ex.
const userName = prompt('Введите как вас зовут?');
alert(`Привет, ${userName}!`);



