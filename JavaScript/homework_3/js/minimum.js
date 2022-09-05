function alertError() {
    alert('Невірно введено вхідні дані');
}

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const age = +prompt('Введіть свій вік', '');

if (age && age >= 0) {
    switch (true) {
        case (age >= 0 && age <= 11):
            alert('дитина');
            break;
        case (age >= 12 && age <= 17):
            alert('підліток');
            break;
        case (age >= 18 && age <= 59):
            alert('дорослий');
            break;
        case (age >= 60):
            alert('пенсіонер');
            break;            
    }
} else alertError();

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let value = +prompt('Введіть число від 0 до 9', '');

if (value && value >= 0 && value <= 9) {
    switch (value) {
        case 0:
            alert(')');
            break;
        case 1:
            alert('!');
            break;
        case 1:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;
        default:
            alertError();
            break;
    }
} else alertError();

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const first = +prompt('Введіть перше число діапазону');
const last = +prompt('Введіть останнє число діапазону');

if (first && last) {
    summ = 0;

    for (i = first; i <= last; i++) {
        summ += i;
    }

    alert(`Сумма числел в діапазоні від ${first} до ${last} = ${summ}`);
} else alertError();


// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function NSD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) {
        let temp = a; 
        a = b; 
        b = temp;
    }

    while (true) {
        if (b === 0) return a;
        a %= b;
        if (a === 0) return b;
        b %= a;
    }
}

let x1 = +prompt('Введіть перше число');
let x2 = +prompt('Введіть друге число'); 

if (x1 && x2) {
    const res = NSD(x1, x2);
    alert('найбільший спільний дільник = ' + res);
} else alertError(); 

// 5. Запитай у користувача число і виведи всі дільники цього числа.

const val = +prompt('Введіть число');

if (val) {
    res = '';

    // for (let i = val; i > 0; i--) {
    //     if (val % i === 0) {
    //         res += i + ', ';
    //     }
    // }

    // або:

    let i = val;

    while (i > 0) {
        if (val % i === 0) {
            res += i + ', ';
        }

        i--;
    }

    alert(`Всі дільники числа ${val}: 
        ${res}`);
} else alertError();