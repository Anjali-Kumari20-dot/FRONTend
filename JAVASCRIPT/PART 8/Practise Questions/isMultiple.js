// Check if all numbers in our array are multiple of 10 or not.

let nums = [12, 34, 50, 80, 90, 100];

let isMultiple = nums.every((el) => el % 10 == 0);

console.log(isMultiple);