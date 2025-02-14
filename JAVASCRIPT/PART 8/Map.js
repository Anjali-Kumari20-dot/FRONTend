// MAP
// let newArr = arr.map(some function defination or name);

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * 2;
// });
// let square = num.map((el) => {
//     return el * el;
// });


let students = [{
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
let gpa = students.map((el) => {
    return el.marks/10;
})