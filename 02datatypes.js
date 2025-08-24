//Number , String , Boolean , Null , Undefined , BigInt , Symbol

// 1.Number
let isValue = null
let convertNum = Number(isValue)

// console.log(convertNum);
// console.log(typeof convertNum);

// "33" = 33
// "33abc" = NaN
// "abc" = NaN
// undefined = NaN
// null = 0

// 2.String.

let val = undefined
let convertString = String(val)

// console.log(convertString)
// console.log(typeof convertString);

// 25 = "25"
// undefined = "undefined"
// null = "null"

let isTrue = ""
let convertBool = Boolean(isTrue)

console.log(convertBool)
console.log(typeof convertBool)

// 25 = true
// 0 = false
// "javascript" = true 
// "" = false