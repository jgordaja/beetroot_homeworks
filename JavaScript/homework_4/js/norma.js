// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, 
// яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(param) {
    let aliquoSum = 0;

    for (let i = 1; i < param; i++) {
        if (param % i === 0) {
            aliquoSum += i;
        }
    }

    return param === aliquoSum; 
}

console.log(isPerfectNumber(496)); // 6, 28, 496 - досконале число 
console.log(isPerfectNumber(5));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа 
// з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function printPerfectNumbers(a, b) {
    const defaultResult = 'В заданому діапазоні немає досконалих чисел';
    let result = 'Досконалі числа заданого діапазону: ';
    let count = 0;

    for (let i = a; i <= b; i++) {
        if (isPerfectNumber(i)) {
            count++;
            result += i + ', ';
        }
    }

    count > 0 ? console.log(result) : console.log(defaultResult); 
}

printPerfectNumbers(1, 500);
printPerfectNumbers(1, 5);