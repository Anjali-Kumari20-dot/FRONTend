// SPREAD
// Expands an iterable into multiple values

function func(...arr){
    // do something
}
console.log(..."apnacollege");
let nums = [12,23,34,45,67768,89,5,3,4,445,678,990];
let newArr = [...nums];
console.log(newArr);
console.log(Math.min(...nums));

let odd = [1, 3, 5, 7, 9, 11, 13, 15];
let even = [2, 4, 6, 8, 10, 12, 14];
let number = [...odd, ...even];
console.log(number);