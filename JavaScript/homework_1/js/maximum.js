/* Максимум */

// 1.Запитай у користувача радіус кола і виведи площу такої окружності.

const radius = prompt('Введіть радіус кола', 0);

if (radius === null || radius === '') {
    alert('Ви не ввели число');
} else { 
    if (isNaN(+radius)) {
        alert('Ви ввели НЕ число');
    } else {
        const  areaCircle = Math.PI * (radius**2)
        alert(`Площа окружності = ${areaCircle}`);
    }
}

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distance = prompt('Введіть відстань в кілометрах між двома містами', 0);
const time = prompt('Введіть за скільки годин Ви хоче дістатися?', 0);

if (distance === null || distance === '' || time === null || time === '') {
    alert('Ви не ввели число');
} else { 
    if (isNaN(+distance) || isNaN(+time)) {
        alert('Ви ввели НЕ число');
    } else {
        const  speed = distance / time;
        alert(`Вам потрібно рухатися зі швидкістю ${speed} км/год`);
    }
}

// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. 
// Курс валют зберігається в константі.

const course = 1.2;

const dollars = prompt('У нас найвигідніший курс! Скільки долларів ти хочеш обміняти на євро?', 0);

switch (true) {
    case (dollars === null || dollars === ''):
        alert('Ви не ввели число');
        break;
    case (isNaN(+dollars)):
        alert('Ви ввели НЕ число');
        break;
    case (+dollars <= 0):
        alert('Що, зовсім немає грошей?!');
        break;
    default:
        const  euros = dollars / course;
        alert(`Тримайте своїх ${euros} євро`); 
} 