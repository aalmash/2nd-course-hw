// Ex 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    } else {
        return -1;
    }
});

console.log(people.sort());


// Ex 2
function isPositive(number) {
    return number > 0;
}
function isMale(gen) {
    return gen.gender === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(ruleFunction(arr[i]))
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people1, isMale));


// Ex 3
let date = new Date();

let timerId = setInterval(() => console.log(date), 3000);
setTimeout(() => {clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


// Ex 4
function delayForSecond(callback) {
    setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

delayForSecond();


// Ex 5
function delayForSecond1(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond1(() => sayHi('Глеб'));