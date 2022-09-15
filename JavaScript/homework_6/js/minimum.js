// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
//кількість і куплений він чи ні, ціну за одиницю товару, сума. 
// Написати кілька функцій для роботи з таким масивом:
// 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, 
// що вже придбали.
// 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shoppingList = [
    {
        nameProduct: 'bread',
        count: 3,
        isBought: true,
        price: 15,
        amount: 45,
    },
    {
        nameProduct: 'apples',
        count: 5,
        isBought: false,
        price: 20,
        amount: 100,
    },
    {
        nameProduct: 'coat',
        count: 1,
        isBought: true,
        price: 3000,
        amount: 3000,
    },
    {
        nameProduct: 'milk',
        count: 1,
        isBought: false,
        price: 32,
        amount: 32,
    },
];

function printShoppingList(arr) { 
    for (let i = 0; i < arr.length; i++) { 
        if (!(arr[i].isBought)) {
            console.log(arr[i].nameProduct);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isBought) {
            console.log(arr[i].nameProduct);
        }
    } 
}

function setIsBought(nameProduct) {
    // for (let i = 0; i < shoppingList.length; i++) {
    //     if (nameProduct === shoppingList[i].nameProduct) {
    //         shoppingList[i].isBought = true;
    //     }
    // } 

    // або:

    shoppingList.forEach(element => {
        if (nameProduct === element.nameProduct) {
            element.isBought = true;
        }
    });
}

console.log(shoppingList);

printShoppingList(shoppingList);

setIsBought('apples');

console.log(shoppingList);  