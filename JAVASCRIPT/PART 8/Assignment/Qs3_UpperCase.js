// Create a new array whose elements are in uppercase of words present in the original array.

let str = ["adam","bob","catlyn","donald","eve"];

let newString = str.map((el) => el.toUpperCase());
console.log(newString);