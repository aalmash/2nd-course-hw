// exercise 1
let moreLess = (a, b) => {
   if (a >= b) {
    return a;
   } else {
    return b;
   }
}
console.log(moreLess(5, 8));

// exercise 2
function evenOdd(userNumber) {
    return userNumber;
}
let userNumber = prompt('Введите число');
if (userNumber % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('Число нечетное');
}

// exercise 3.1
function square() {
    let userSquare = prompt('Введите число');
    let resultSquare = userSquare ** 2;
    console.log(`Квадрат этого числа ${resultSquare}`);
}
square();

// exercise 3.2
function square2() {
    let userSquare2 = prompt('Введите число');
    return  alert(`Квадрат этого числа ${userSquare2 ** 2}`);
}
square2();

// exercise 4
"use strict";
let age = prompt("Сколько Вам лет?");

let printMessage;

if (age < 0) {
    printMessage = function () {
        alert('Вы ввели неправильное значение');
    }
} if (age < 12) {
    printMessage = function () {
        alert("Привет, друг!");
    }
} else {
    printMessage = function () {
        alert("Добро пожаловать!");
    }
}

printMessage();

// exercise 5
function check (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}
console.log(check(6,8));

// exercise 6
let isNumber = (userIsNumber = prompt(('Введите число'))) => {
    if (isNaN(userIsNumber)) {
        return alert('Переданный параметр не является числом');
    } else {
        return alert(`Число в кубе равняется ${userIsNumber**3}`);
    }
}
isNumber();

// exercise 7

const circle1 = {
    radius: 20,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 13,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

function getCircleArea() {
    return 3.14 * this.radius**2 ;
};
function getCirclePerimeter() {
    return 2 * 3.14 * this.radius;
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

