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
console.log("EMployee Information:", employee)
