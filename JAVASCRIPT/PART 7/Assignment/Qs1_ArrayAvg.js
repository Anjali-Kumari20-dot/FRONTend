// const arrayAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length ;
// }

const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
    return total / arr.length;
}

console.log(arrayAverage([12,34,45,56,7,89,44,55]));