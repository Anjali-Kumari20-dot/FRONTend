// Create a function to find the min number in an array.

let nums = [12, 34, 45, 67, 78, 90, 10];
let ans = nums.reduce((min, el) => {
    if(el < min){
        return el;
    } else{
        return min;
    }
});

console.log(ans);