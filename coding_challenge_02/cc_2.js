//Task 1 - Working with Arrays
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Mousepad"]
console.log("Products:", products)

products.push("Headphones")
console.log("Products:", products)

products.pop()
console.log("Products:", products)

//Task 2 - Accesing and Modifying Arrays
let scores = [5, 10, 15, 20, 25]
console.log("Scores:", scores)
scores[1] = 11
console.log("Scores:", scores)
let total = scores.reduce((sum , score) => sum + score, 0)
let length = scores.length
let average = total / length
console.log("Average Score:", average)

//Task 3 - Working with Objects
let employee = {
    name: "John Smith",
    age: 25,
    department: "Electronics",
    isActive: true
}
console.log("Employee Information:", employee)
employee.department = "Customer Service"
console.log("Employee Information:", employee)
employee.position = "Customer Service Representative"
console.log("Employee Information:", employee)

//Task 4 - Array of Objects
let janeSmith = {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    purchaseAmount: 500
}
let marcusConner = {
    name: "Marcus Conner",
    email: "marcusconner@gmail.com",
    purchaseAmount: 275
}
let philHunt = {
    name: "Phil Hunt",
    email: "philhunt@gmail.com",
    purchaseAmount: 200
}
let customers = [janeSmith, marcusConner, philHunt]
console.log(customers)
let joshWaters = {
    name: "Josh Waters",
    email: "joshwaters@gmail.com",
    purchaseAmount: 50
}
customers.push(joshWaters)
console.log(customers)
//Task 5 - Object Methods
let order = {
    orderID: 45768,
    customerName: "Dean Acker",
    amount: 47.56,
}
    order.tax =  .1
    order.calculateTax =  function() {
         return this.amount * this.tax
    }
console.log("Order Details:", order)
console.log("Tax Amount:", order.calculateTax())