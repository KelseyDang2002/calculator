"use strict";
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj);
};
const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        throw new Error(`Pizza ${pizzaName} not found on the menu.`);
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
};
const completeOrder = (orderId) => {
    //
};
try {
    console.log(menu);
    // addNewPizza();
    // let order = placeOrder();
}
catch (e) {
    console.log(e);
}
