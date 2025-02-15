// Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [12, 34, 45, 567, 33, 223, 4656, 78897, 90];

const square = nums.map((num) => num * num);
console.log(square);

let sum = nums.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);
