// forEach
// arr.forEach(some function defination or name);
let brr = [{
    name: "Anjali",
    marks: 95
}, 
{
    name: "Rupali",
    marks: 99.9999
}, 
{
    name: "Aditya",
    marks: 99.999901
}];

brr.forEach((student) => {
    console.log(student.marks);
})

/////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) =>{
//     console.log(el);
// });

// arr.forEach(function (el) {
//     console.log(el);
// });

// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print);