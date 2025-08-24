
let date = new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());

let preDate = new Date(2025,2,20,12,0)
// let preDate = new Date("2025-03-20")
// console.log(preDate.toDateString());
console.log(preDate.toTimeString());
console.log(preDate.getTime());

let currDate = new Date(2025,2,22,24,0)
console.log(currDate);
let diff = ((((currDate-preDate)/1000)/60)/60)/24
console.log(diff.toFixed(2));


