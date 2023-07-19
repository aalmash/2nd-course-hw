// exersize 1
let hello = 0;

while (hello < 2) {
    console.log('Привет');
    hello++;
}

// exersize 2
let numbers15 = 1;

do {
    console.log(numbers15);
    numbers15++;
} while (numbers15 < 6);

// exersize 3
let numbers722 = 7;

while (numbers722 < 23) {
    console.log(numbers722);
    numbers722++;
}

// exersize 4
let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};

for( let salary in obj) {
    console.log(`${salary}- зарплата ${obj[salary]} долларов.`);
}

// exersize 5

let numberN = 1000;
let num =0;

while (numberN >= 50) {
    numberN = numberN / 2;
    num++;
} console.log(`Итераций ${num}`);




// exersize 6
let friday = 3;
do {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday = friday + 6;
    friday++;
} while(friday <= 31);
