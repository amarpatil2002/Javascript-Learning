const accountNumber = 123456
let accountEmailId = "amarjit@gmail.com"
var accountPassword = "789456"
accountCity = "Pandharpur"

//accountNumber = 123456   //  Using const keyword we can't redeclare and reassign the variable
accountEmailId = "amarjitpatil@gmail.com"
// let accountEmailId = "amarjitpatil@gmail.com" // We can't redeclare variable using let keyword but we can reassign the value
var accountPassword = 11111222                   // We can redeclare and ressign variable using var keyword

// console.table([accountNumber,accountEmailId,accountPassword,accountCity])
var num2 = 400
let num = 50
{
    let num = 100    //
    const num1 = 120 // let and const both keywords have block level scope
    var num2 = 140   // var has functional level scope
}

// console.log(num)
// console.log(num1)
console.log(num2)