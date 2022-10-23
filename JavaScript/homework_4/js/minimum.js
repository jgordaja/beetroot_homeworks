// Напиши всі можливі варіанти створення функцій.

// 1 function declaration
function myFunction() {
    //
}

myFunction();

// 2 function expression
let myFunc = function() {
    //
}

// 3 arrow function
myFunc = () => {
    //
}

const myFunction2 = arg => arg > 0 ? '+' : '-';

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// 1 спосіб

function countArguments1() {
    return arguments.length;
}

console.log(countArguments1(1, 2, -9, 'hjhjhj'));

// 2 спосіб

const countArguments2 = function() {
    return arguments.length;
}

console.log(countArguments2(1, 2, -9, 'hjhjhj')); 

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function comparison(a, b) {
    if (a && b && isFinite(a) && isFinite(b)) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    } else return 'невірні вхідні дані';
}

console.log(comparison(1, 3));
console.log(comparison(3, 1));
console.log(comparison(3, 3));
console.log(comparison('hhhv', 3));
console.log(comparison());

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(val) {
    if (isFinite(val) && val && val > 0) {
        let product = 1;
    
        for (let i = 1; i <= val; i++) {
            product *= i;
        }
    
        return product;
    }

    return 'невірні вхідні дані';
}

console.log(factorial(3));
console.log(factorial('jbhhvh'));
console.log(factorial());
console.log(factorial(-5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149. 

function concatNumbers(a, b, c) {
    return +(''+a+b+c);
}

const c = concatNumbers(1, 2, 3);

console.log(c);

// або:

let concatNumbers2 = (a, b, c) => +(''+a+b+c);

console.log(concatNumbers2(3, 2 , 1)); 

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, 
//то вона обчислює площу квадрата.

// function area(a, b = null) {
//     if (b === null) {
//         return `Площа квадрата = ${a**2}`;
//     } else {
//         return `Площа прямокутника = ${a*b}`;
//     }
// }

// або:

let area = (a, b = null) => b === null ? `Площа квадрата = ${a**2}` : `Площа прямокутника = ${a*b}`;

let p = area(5, 6); 
console.log(p);

p = area(5); 
console.log(p);