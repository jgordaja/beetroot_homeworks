// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// value = +prompt('Введіть п’ятирозрядне число', ''); 

// if (value && value > 0 && value.toString().length === 5) {
//     let reverseValue = +value.toString().split('').reverse().join('');

//     (value === reverseValue)
//         ? alert('Введене число є паліндромом')
//         : alert('Введене число НЕ є паліндромом'); 

// } else alertError(); 

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// let purchaseAmount = +prompt('Введіть сумму покупки');

// if (purchaseAmount && purchaseAmount > 0) {
//     let discountPercent = 0;

//     if (purchaseAmount >= 200 && purchaseAmount < 300) {
//         discountPercent = 3;
//     }

//     if (purchaseAmount >= 300 && purchaseAmount < 500) {
//         discountPercent = 5;
//     } 

//     if (purchaseAmount >= 500) {
//         discountPercent = 7;
//     }

//     summ = purchaseAmount - purchaseAmount / 100 * discountPercent;

//     alert(`Cума до оплати зі знижкою ${discountPercent}% = ${summ}`);
// } else alertError();

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let input = prompt('Введіть 10 чисел, розділенних комою');
// але для цього потрібен користувач з рівними руками, який корректно введе дані 

let inputtArray = input.split(',');

for (i = 0; i < inputtArray.length; i++) {
    inputtArray[i] = +(inputtArray[i].trim())
}

let zero = 0;
let negative = 0;
let positive = 0;
let paired = 0;
let unpaired = 0; 

for (i = 0; i < inputtArray.length; i++) {
    switch (true) {
        case (inputtArray[i] === 0):
            zero++;
            break;
        case (inputtArray[i] < 0):
            negative++;
        case (inputtArray[i] > 0):
            positive++;
        case (inputtArray[i] % 2 === 0):
            paired++;
        case (inputtArray[i] % 2 !== 0):
            unpaired++;
    }
    continue;
}

alert(`В веденому рядку:
    ${input}
    - ${zero} нулів
    - ${negative} від’ємних  чисел
    - ${positive} додатніх чисел
    - ${paired} парних чисел
    - ${unpaired}  непарних чисел
    `);

// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день?» 
// і так до тих пір, поки користувач натискає OK.

// let input;

// week = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];

// i = 0;

// do { 
//     input = confirm(week[i] + '. Хочеш побачити наступний день?'); 
//     i ++;
//     if (i > 6) i = 0;
// } while (input) 