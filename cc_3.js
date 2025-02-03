// Task 1
let prices = [0.99, 5.99, 10.99, 15.99, 20.99]
prices.push (12.99);
prices.shift();

console.log("Updated Prices:", prices);

// Task 2
let orders = [1, 2, 3, 4, 5];
orders [2] +=5;
let totalOrders = orders.reduce((sum, quantity) => sum+ quantity, 0);

console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

