// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт,
//  що ми шукаємо, буде відсутнім)

function newProductList(nameProduct) {
    // let newArray = [];

    // for (let i = 0; i < shoppingList.length; i++) { 
    //     if ((shoppingList[i].nameProduct !== nameProduct)) {
    //         newArray.push(shoppingList[i]);
    //     }
    // }

    // return newArray;

    // або:

    return shoppingList.filter(element => element.nameProduct !== nameProduct)
}

let myNewProductList = newProductList('apples');

console.log(myNewProductList);

// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, 
//то сума буде 24. 

function appendToShoppingList(newProduct) {
    let index = shoppingList.findIndex(element => element.nameProduct === newProduct.nameProduct) 

    if (index !== -1) {
        shoppingList[index].count += 1;
        shoppingList[index].amount += shoppingList[index].price;
    } else {
        shoppingList.push(newProduct);
    }
}

let newProduct = {
    nameProduct: 'milk',
    count: 1,
    isBought: false,
    price: 32,
    amount: 32,
};

appendToShoppingList(newProduct);
console.log(shoppingList);

newProduct = {
    nameProduct: 'water',
    count: 1,
    isBought: false,
    price: 24,
    amount: 24,
};

appendToShoppingList(newProduct);
console.log(shoppingList);