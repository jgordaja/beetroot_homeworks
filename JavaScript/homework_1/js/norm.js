/* Норма */

//1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let result = prompt('Як тебе звати?', ''); 
let nameUser;

if (result === null || result === '') {
    alert('Дуже шкода, а я так хотів познайомитися...');
} else {
    nameUser = result;
    alert(`Привіт, ${nameUser}!`);
}

// 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

const currentYear = 2022;
let birthYear;

result = prompt('Який в тебе рік народження?', ''); 

if (result === null || result === '') {
    alert('Ти знову не хочеш відповідати?');
} else {
    birthYear = +result;
    const age = currentYear - birthYear;

    if (age <= 0) {
        alert('Некорректно введено рік народження. Ти ще в проєкті?');
    } else if (age >= 100) {
        alert('Ти точно не бачив динозаврів?');
    } else {
        alert(`Тобі ${age} років. Ти ще зовсім молодий/молода ))`);
    }
}

// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

// const side = prompt('Введіть сторону квадрата для обчислення периметру', 0);

if (side === null || side === '') {
    alert('Ви не ввели число');
} else {
    const  sideSquare = side * 4;

    if (isNaN(sideSquare)) {
        alert('Ви ввели НЕ число');
    } else {
        alert(`Периметр квадрату = ${sideSquare}`);
    }
}