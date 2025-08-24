let id = Symbol()

let emp = { 
    [id]:123,
    name:"John",
    age:23,
    city:"London",
}

// console.log(emp[id]); // add symbol data type inside the object

emp.greeting = function() {
    console.log(`Hello , ${this.name}`);
}
// emp.greeting()

console.log(emp);










// Object methods

// Object.freeze(emp)  // once we freez the object then we can't make any changes
// emp["salary"] = 5000
// console.log(emp);

// Object.keys(emp).forEach((data) => {
//     console.log(data);
// })

// Object.values(emp).map((data) => {
//     console.log(data);
// })

// Object.entries(emp).forEach(([key,value]) => {
//     console.log(key + ":" + value);
// })


