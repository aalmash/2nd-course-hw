let seasonGame = () => {
    let answer = prompt('Введите номер месяца');
    if (answer == 12 || answer == 1 || answer == 2) {
        alert('Сезон "Зима"');
    } else if (answer == 3 || answer == 4 || answer == 5) {
        alert('Сезон "Весна"');
    } else if (answer == 6 || answer == 7 || answer == 8) {
        alert('Сезон "Лето"');
    } else if (answer == 9 || answer == 10 || answer == 11) {
        alert('Сезон "Осень"');
    } else {
        alert('Такого месяца не существует');
    }
}

// работает только если писать писать так же как и в массиве с заглавной буквы 
const wordGame = () => {

    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(`Запомни слова: ${words}`);

    let firstEl = prompt('Введи первое слово');
    let lastEl = prompt('Введи последнее слово');

    if (firstEl == words[0] && lastEl === words[words.length - 1]) {
        alert('Поздравляю! У вас хорошая память.')

    } else if (firstEl == words[0]) {
        alert('Вы были близки к победе!')

    } else if (lastEl === words[words.length - 1]) {
        alert('Вы были близки к победе!')

    } else {
        alert('Вы ответили неверно.')
    }
}
