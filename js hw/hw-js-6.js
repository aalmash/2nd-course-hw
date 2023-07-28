// Ex. 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

// Ex. 2
let result = numbs.indexOf(4);
console.log(result);

// Ex. 3
let numb = [1, 3, 5, 10, 20];
numb = numb.join(' ');

console.log(numb);

// Ex. 4
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1);
	}
}

console.log(arr);

// Ex. 5
const numbs2 = [1, 1, 1];

numbs2.push(2, 2, 2);
console.log(numbs2);

// Ex. 6
let numbs3 = [9, 8, 7, 'a', 6, 5];

numbs3 = numbs3.sort();
console.log(numbs3.pop());
console.log(numbs3);

// Ex. 7
const numbs4 = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt(`Угадайте число`));
if (numbs4.includes(userAnswer)) {
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}

// Ex. 8
const line = 'abcdef';

let arrayLine = line.split('');
console.log(arrayLine);
arrayLine = arrayLine.reverse();
console.log(arrayLine);
arrayLine = arrayLine.join('');
console.log(arrayLine);

// Ex. 9 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// Ex. 10
const numbs6 = [2, 5, 4, 8, 7, 3];

let result2 = 0;
for (let i = 0; i < numbs6.length - 1; i++) {
    console.log((result2 = numbs6[i] + numbs6[i + 1]));
}

// Ex. 11 
const numbs7 = [3, 5, 7, 9, 1];

let square = numbs7.map(item => item**2);
console.log(square);

// Ex. 12 
const words =['How', 'I', 'Met', 'Your', 'Mother'];

const lengthWords = function (length) {
    let lengthWord = length.map(item => item.length);
    return lengthWord
}
console.log(lengthWords(words));

// Ex. 13
function filterPositive(array) {
    let minus = [];
    for (numbMinus of array) {
        if (numbMinus < 0) minus.push(numbMinus);
    }
    return minus;
}
  
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));