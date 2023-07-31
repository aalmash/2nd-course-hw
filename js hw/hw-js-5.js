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
let evenOdd = (a) => {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(evenOdd(7));

// exercise 3.1
const square = (a) => {
    console.log(a * a);
}
square(4);

// exercise 3.2
const square1 = (a) => {
    return a ** 2;
}
console.log(square1(4));

// exercise 4
function age() {
    let userAge = prompt("Сколько Вам лет?");
    
    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}
age();

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
let isNumber = (userIsNumber = prompt('Введите число')) => {
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

