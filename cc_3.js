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

// Task 3
let employee = {
    name: "Luka Doncic",
    role: "Technician",
    performanceScore: 75,
    isActive: true
}

employee.performanceScore = 99;
employee.promotionEligible = employee.performanceScore > 90;

console.log("Updated Employee Data:", employee);

// Task 4
let feedback= [
{
    customerName: "Anthony Davis",
    feedbackText: "Great time and i enjoyed winning",
    rating: 5
},

{
    customerName: "Lebron James",
    feedbackText: "I can't complain and cant wait to be back",
    rating: 4
},

{
    customerName: "Austin Reaves",
    feedbackText: "I did not enjoy the recent changes",
    rating: 1
}
];

feedback.push({
    customerName: "Kyrie Irving",
    feedbackText: "I think the changes made really imrpved the place",
    rating: 5
});

Console.log("Customer Feedback Records:", feedback);
