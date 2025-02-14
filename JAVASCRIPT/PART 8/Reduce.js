// REDUCE
// Reduces the array to a single value
// Array.reduce(reducer function with 2 variables for(accumulator, element))
let nums = [1, 2, 3, 4, 7, 8, 5, 6];
let finalVal = nums.reduce((res, el) => {
    // console.log(res);
    return res+el;
});
console.log(finalVal);

// finding maximum in an array

let result = nums.reduce((max, el) => {
    if(el > max){
        return el;
    }else {
        return max;
    }
});

console.log(result);