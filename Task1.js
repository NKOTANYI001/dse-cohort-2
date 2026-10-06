const products =[
    {id:"P01", name:"Notebook", price:3500, stock:10},
    {id:"P02", name:"Pen", price:500, stock:25},
    {id:"P03", name:"Folder", price:1200, stock:0},
    {id:"P04", name:"Marker", price:1500, stock:4}
];
//1. for notebook = 35,000, Pen = 12,500, Folder = 0, Marker = 6000,
//2. the for loop helps us to do something continuously, 
// while the condition specifies how many times the task is to be repeated and what criteria should be met for the condition to be executed.
//3. we use let for the total because it can be modified but we use const for the variable because it is a constant that cant be modified.

function calculateTotal(quantity, unitPrice) {
    if (quantity > 0 && unitPrice > 0) {
      return quantity * unitPrice
    }
    
    
}