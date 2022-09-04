// // 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// // Вивести суму нарахованих відсотків.

// const summ = +prompt('Введіть суму грошей', '');

// const percent = 5;
// const months = 2;
// const monthInYear = 12;


// if (summ && summ > 0) { 
//     const summPercent = (summ / 100 * percent / monthInYear * months).toFixed(2);
//     alert('Сума нарахованих відсотків за 2 місяці під 5% річних = ' + summPercent);
// } else {
//     alert('Невірно введені данні');
// }

// // 2. Що повернуть вирази:

// //  2 && 0 && 3 
// console.log('2 && 0 && 3 = ' + Boolean(2 && 0 && 3)); // false

// //  2 || 0 || 3 
// console.log('2 || 0 || 3 = ' + Boolean(2 || 0 || 3)); // true 

// // 2 && 0 || 3
// console.log('2 && 0 || 3 = ' + Boolean(2 && 0 || 3)); // true