// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок 
// може купити користувач і скільки здачі у нього залишиться.

const money = +prompt('Введіть суму грошей в гаманці', '');
const price = +prompt('Введіть ціну однієї шоколадки', '');

if (money && price) {
    let count = Math.trunc(money / price); 
    let shortChange = (money - price * count); 
    console.log(shortChange);
    let shortChangeGrn = Math.trunc(shortChange);
    console.log(shortChangeGrn);
    let shortChangeCop = shortChange.toFixed(2) *100 % 100;
    console.log(shortChangeCop);
    alert(`На ${money}грн Ви можете купити ${count} шоколадок. Решта = ${shortChangeGrn}грн ${shortChangeCop} коп`);
} else {
    alert('Невірно введені данні');
}

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі 
// знадобиться оператор % (залишок від ділення).

// варіант 1

let value = +prompt('Введіть тризначне число', '');

if (value && value > 0 &&  value.toString().length === 3) {
    let alone = value % 100 % 10;
    console.log(alone); 

    let dozens = (value - alone) % 100 / 10;
    console.log(dozens);

    let hundreds = Math.trunc(value / 100);
    console.log(hundreds);
    
    newValue = alone*100 + dozens*10 + hundreds;
    
    alert('Число задом наперед: ' + newValue);
} else {
    alert('Невірно введені данні');
}

// // варіант 2

value = +prompt('Введіть тризначне число', ''); 

if (value && value > 0 &&  value.toString().length === 3) {
    let newValue = +value.toString().split('').reverse().join('');
    alert('Число задом наперед: ' + newValue);
} else {
    alert('Невірно введені данні');
} 