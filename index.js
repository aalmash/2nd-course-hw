let seasonGame = () => {
    let answer = prompt('Введите номер месяца');
    if (answer == 12 || answer == 1 || answer == 2 ) {
        alert('Сезон "Зима"');
    } else if (answer == 3 || answer == 4 || answer == 5 ) {
        alert('Сезон "Весна"');
    } else if (answer == 6 || answer == 7 || answer == 8 ) {
        alert('Сезон "Лето"');
    } else if (answer == 9 || answer == 10 || answer == 11 ) {
        alert('Сезон "Осень"');
    } else {
        alert('Такого месяца не существует');
    }
}