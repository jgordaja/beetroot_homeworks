// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

prompt('Загадайте число від 0 до 100', '');

let start = 0;
let end = 100; 
let N; 
let isMore;
let isSmaller;
let res = '';

while (start <= end) {
    N = Math.floor((start + end) / 2);

    isMore = confirm(`Ваше число більше ${N}? Так - ОК, Ні - Відміна`);

    if (isMore) {
        start = N;
    } else {
        isSmaller = confirm(`Ваше менше ${N}?  Так - ОК, Ні - Відміна`);

        if (isSmaller) {
            end = N;
        } else {
            // число = N
            res = N;
            break;
        }
    }
}

alert(`Ви загадали число: ${res}`);


// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

document.write(`<table border=1 cellspacing=0 cellpadding=2 align=center>`)

for (j = 1; j <= 10; j++) {
    document.write(`<tr>`); 
    for (i = 2; i <= 9; i++) { 
        document.write(`<td> ${i} x ${j} = ${i * j} </td>`)
    }
    document.write("</tr>") 
}
document.write("</table>") 

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, 
// рік, а також високосний рік.

// я розумію, що це треба упоротися і зробити через цикли
// але справді треба мучатися оце і все передбачити якщо є функції для роботи с датами??? 

// const inputDate = prompt('Введіть число, місяць, рік у вказанному форматі: чч мм рррр', '');

if (inputDate) {
    const dateArray = inputDate.split(' ');

    const day = dateArray[0]; 
    const month = dateArray[1]; 
    const year = dateArray[2]; 

    if (day && month && year) {
        const currentDate = new Date(year, month-1, day);

        let nextDate = currentDate; 
        nextDate.setDate(currentDate.getDate()+1);
    
        const nextDateDay = currentDate.getDate();
        const nextDateMonth = currentDate.getMonth()+1;
        const nextDateYear = currentDate.getFullYear();
        
        alert(`Наступна дата: ${nextDateDay} ${nextDateMonth} ${nextDateYear}`);
    } else alertError();
} else alertError();

