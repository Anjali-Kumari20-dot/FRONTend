console.log("(((((forEach :--- )))))");

let arr = [1, 2, 3, 4, 5];
console.log("Using function call :-- ");
function print(el) {
  console.log(el);
}
arr.forEach(print);

// ---- OR ---- //

console.log("Using Arrow functions call :-- ");
arr.forEach((el) => {
  console.log(el);
});

// ---- OR ---- //

console.log("Costomised function call :-- ");
arr.forEach(function (el) {
  console.log(el);
});

console.log("Details of student:---- ");
let brr = [
  {
    name: "Anjali",
    marks: 95,
  },
  {
    name: "Shivam",
    marks: 85,
  },
  {
    name: "Rupali",
    marks: 99,
  },
];

brr.forEach((student) => {
  console.log(`${student.name} obtained ${student.marks} marks`);
});

console.log("\n\n(((((Map :--- )))))");

let num = [1, 2, 3, 4, 5];

console.log("Costomised function call :-- ");
num.map(function (el) {
  console.log(`${el} ->  ${el * 2}`);
});

console.log("\nUsing Arrow functions call :-- ");
num.map((el) => {
  console.log(`${el} ->  ${el * 2}`);
});

console.log("\n\n(((((Filter :--- )))))");

let nums = [23, 12, 34, 45, 56, 55, 78, 89, 66, 76, 77];

let ans = nums.filter((el) => {
  return el % 2 == 0; // even -> true, odd -> false
});

console.log("After applying filter EVEN elements: \n", ans);

console.log("\n\n(((((Every :--- )))))");

let even = [1, 2, 3, 4].every((el) => el % 2 == 0);
console.log(even);

let odd = [1, 3].every((el) => el % 2 != 0);
console.log(odd);

console.log("\n\n(((((Reduce :--- )))))");

let nums2 = [1, 2, 3, 4];
let res = nums2.reduce((res, el) => res + el);
console.log("Sum of: ", nums2, " = ", res);

console.log("Maximum in an array:--- ");
let nums3 = [1, 23, 34, 5, 67, 78, 34, 33, 55, 56];
let max = -1;
let result = nums3.reduce((max, el) => {
  if (max < el) return el;
  else return max;
});

console.log(result);

console.log("\n\n(((((Practice Questions :--- )))))");

// QUESTION 1 : Check if all numbers in our array are multiples of 10 or not

let nums4 = [10, 20, 34, 30, 40, 50, 5];
let correct = nums4.every((el) => el % 10 == 0);
console.log(nums4, "all elements are multiple of 10 : ", correct);

// QUESTION 2 : Create a function to find the min number in an array.

function getMin(nums) {
  let min = nums4.reduce((min, el) => {
    if (min > el) return el;
    else return min;
  });
  return min;
}

console.log("Minimum element in array: ", nums4, " = ", getMin(nums4));

// DEFAULT PARAMETERS

function sum(a, b = 2){
    return a+b ;
};

console.log("Finding sum of elements using default paramters: ",sum(23));

// SPREAD

console.log("Using spread: ",..."apnacollege");

console.log(Math.min(...nums4));
console.log(...nums3);

let newArr = [...nums3];
console.log(newArr);

let chars = [..."Hello"];
console.log(chars);

console.log("\n\n(((((Rest :--- )))))");

function sum(...args){
  return args.reduce((sum, el) => sum + el);
}

function min(msg, ...args){
  console.log(msg);
  return args.reduce((min, el) => {
    if(min > el) return el;
    else return min;
  });
};

console.log("\n\n(((((Destructing :--- )))))");

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerUp, secondRunnerUp, ...others] = names;
console.log(winner, runnerUp,  secondRunnerUp, others);

console.log("\n\n(((((Destructing objects :--- )))))");

const student = {
  name : "Anjali",
  class: 12,
  age: 20,
  subjects: ["Hindi", "English", "Math", "Science", "Social Studies"],
  username: "anjali123",
  password: 1234,
};

const {username: user, password: pass} = student;

console.log(user); 

// --------------------PRACTICE QUESTIONS-------------------------------------------//

// QUESTION 1
let nums5 = [12, 23, 34, 45, 56, 7, 8, 10];

function squareAndSumThenAverage (arr) {
  let arrSize = arr.length;
  let sum = 0;
  sum = arr.reduce((sum, el) => sum + (el * el));
  return sum / arrSize;
}



console.log(squareAndSumThenAverage(nums5));

// QUESTION 2

function Exceed(arr) {
  return nums5.map((el) => el + 5);
}

console.log(Exceed(nums5));

// QUESTION 3
let originalArr = ['anjali', 'aditya', 'rupali', 'hatichuki'];

function capitalise (str) {
  return originalArr.map(el => el.toUpperCase()) ;
}
console.log(capitalise(originalArr));

// QUESTION 4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

console.log(doubleAndReturnArgs(nums5, 4, 5, 7, 8, 90));

// QUESTION 5
const student1 = {
  name: "Anjali Kumari",
  age : 20,
  class: 11,
  email : "anjali123@gmail.com",
  subjects : ["hindi", "english", "Math", "Chemistry", "Physics"],
}

const student2 = {
  password: "123..df",
  username: "anjali@123",
}
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects(student1, student2));
