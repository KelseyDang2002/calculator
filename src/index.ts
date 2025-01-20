type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let cashInRegister: number = 100;
let nextOrderId: number = 1;
let nextPizzaId: number = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
];

const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price : 11 });

const placeOrder = (pizzaName: string): Order | undefined => {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    if (!selectedPizza) {
        console.error(`${pizzaName} Pizza not found on the menu.`);
        return;
    }

    cashInRegister += selectedPizza.price;

    // declare new const newOrder, specify type
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}

const completeOrder = (orderId: number): Order | undefined => {
    const foundOrder = orderQueue.find(order => order.id === orderId);

    if (!foundOrder) {
        console.error(`Order ${orderId} not found.`);
        return;
    }

    foundOrder.status = "completed";
    return foundOrder;
}

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be a string or number.");
    }
}

console.log("Menu:", menu);

// placeOrder("Chicken Bacon Ranch");
// console.log("Order queue:", orderQueue);
// completeOrder(1);

// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);
