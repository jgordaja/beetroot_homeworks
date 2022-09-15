// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function summ(productList) {
    let s = 0;

    productList.forEach(element => { 
        s += element.count * element.price;
    }); 

    return s;
}

const summProducts = summ(shoppingList);
console.log(summProducts);

// 2. Підрахунок суми всіх (не) придбаних продуктів.

function summNotBought(productList) {
    let s = 0;

    productList.forEach(element => { 
        if (!element.isBought) {
            s += element.count * element.price;
        }
    }); 

    return s;
}

const summPNotBoughtroducts = summNotBought(shoppingList);
console.log(summPNotBoughtroducts);

// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
// в залежності від параметра функції, який вона приймає) 

function sortHelperAsc(a, b) {
    return a.amount - b.amount;
}

function sortHelperDesc(a, b) {
    return b.amount - a.amount;
}

function printSortShoppingList(order = 'asc', productList) {
    order === 'asc' 
        ? productList.sort(sortHelperAsc)
        : productList.sort(sortHelperDesc);

    console.log(productList);
} 

printSortShoppingList('desc', shoppingList);
// printSortShoppingList('asc', shoppingList);
